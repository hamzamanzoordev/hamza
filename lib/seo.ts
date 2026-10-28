import type { Metadata } from "next"

/**
 * Central SEO configuration + a `pageMetadata()` helper so every page ships
 * consistent canonical URLs, Open Graph and Twitter cards, and a branded OG
 * image generated on the fly by /api/og.
 */

export const SITE = {
	name: "Hamza Manzoor",
	shortName: "Hamza",
	brand: "Hamza Manzoor",
	title: "Hamza Manzoor | Web Development, App Development & AI Automation",
	description:
		"Hamza Manzoor is a web and app developer and AI automation engineer. Websites, iOS and Android apps, and AI chatbots, designed, built and launched end to end.",
	url: (process.env.NEXT_PUBLIC_SITE_URL || "https://hamzamanzoor.online").replace(/\/$/, ""),
	locale: "en_US",
	/**
	 * ⚠️ Twitter/X handle. Left null on purpose — `@hamza` was a placeholder and
	 * belongs to somebody else, so shipping it attributed every card on this
	 * site to a stranger's account. Set it to the real handle (with the @) and
	 * `twitter:creator` starts being emitted again; leave it null and the tag
	 * is simply omitted, which is correct rather than wrong.
	 */
	twitter: null as string | null,
	/**
	 * Profiles that prove this is the same person across the web. This is the
	 * single strongest entity signal there is: it's what lets Google, and the
	 * AI answer engines, connect this site to a real identity. Person.sameAs,
	 * the footer and llms.txt all read this. Add X, Upwork etc. as they exist.
	 */
	sameAs: [
		"https://www.linkedin.com/in/hamzamanzoordev/",
		"https://github.com/hamzamanzoordev",
	] as string[],
	/** Handles people may search instead of the full name. */
	alternateNames: ["hamzamanzoordev", "Hamza Manzoor Dev"],
	/** The company Hamza founded. Surfaces in Person.worksFor / founder-of. */
	company: {
		name: "ZynHive",
		url: "https://zynhive.com",
	},
	keywords: [
		"Hamza Manzoor",
		"Hamza Manzoor developer",
		"hamzamanzoordev",
		"web development",
		"app development",
		"AI automation",
		"freelance web developer",
		"mobile app developer",
		"AI chatbot developer",
		"Next.js developer",
		"React Native developer",
		"Flutter developer",
	],
} as const

/**
 * Keep a meta description inside the length Google actually renders.
 *
 * Anything past ~160 characters is cut mid-word with an ellipsis in the SERP,
 * which wastes the tail of the sentence. Rather than hard-truncating, this
 * ends on the last complete sentence that fits; failing that, the last whole
 * word. Descriptions already short enough pass through untouched.
 */
export function clampDescription(text: string, max = 158): string {
	const t = text.trim()
	if (t.length <= max) return t

	const window = t.slice(0, max + 1)
	const sentenceEnd = Math.max(
		window.lastIndexOf(". "),
		window.lastIndexOf("! "),
		window.lastIndexOf("? "),
	)
	// Only accept a sentence break that keeps most of the budget — otherwise a
	// short opening sentence would throw away everything after it.
	if (sentenceEnd > max * 0.6) return t.slice(0, sentenceEnd + 1)

	const wordEnd = window.lastIndexOf(" ")
	return `${t.slice(0, wordEnd > 0 ? wordEnd : max).replace(/[,;:—-]$/, "")}…`
}

/** Absolute URL for a path on this site. */
export function absoluteUrl(path = "/"): string {
	if (path.startsWith("http")) return path
	return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`
}

/** Build the dynamic OG image URL for a page. */
export function ogImageUrl(opts: { title?: string; tag?: string; subtitle?: string } = {}): string {
	const params = new URLSearchParams()
	if (opts.title) params.set("title", opts.title)
	if (opts.tag) params.set("tag", opts.tag)
	if (opts.subtitle) params.set("subtitle", opts.subtitle)
	const qs = params.toString()
	return `/api/og${qs ? `?${qs}` : ""}`
}

export interface PageMetaInput {
	/** Page-specific title. The brand name is appended automatically via the template. */
	title: string
	/** Meta description (aim for 140–160 chars). */
	description: string
	/** Route path, e.g. "/services". Used for canonical + og:url. */
	path: string
	/** Optional eyebrow shown on the OG image (e.g. "Services"). */
	tag?: string
	/** Large headline drawn on the OG image. Defaults to `title`. */
	ogTitle?: string
	/** Optional subtitle drawn on the OG image. Defaults to `description`. */
	ogSubtitle?: string
	/** Set false for private/utility pages. Defaults to true. */
	index?: boolean
	/** Additional keywords merged with the site defaults. */
	keywords?: string[]
}

export function pageMetadata(input: PageMetaInput): Metadata {
	const { title, path, tag, ogTitle, ogSubtitle, index = true, keywords = [] } = input
	// Clamped once, here, so no page can ship a description the SERP will cut.
	const description = clampDescription(input.description)
	const canonical = absoluteUrl(path)
	const image = ogImageUrl({
		title: ogTitle || title,
		tag,
		subtitle: ogSubtitle,
	})

	return {
		title,
		description,
		keywords: [...SITE.keywords, ...keywords],
		alternates: { canonical },
		robots: index
			? { index: true, follow: true }
			: { index: false, follow: false },
		openGraph: {
			type: "website",
			url: canonical,
			siteName: SITE.brand,
			title: `${title} · ${SITE.brand}`,
			description,
			locale: SITE.locale,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: `${title} | ${SITE.brand}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} · ${SITE.brand}`,
			description,
			images: [image],
		},
	}
}
