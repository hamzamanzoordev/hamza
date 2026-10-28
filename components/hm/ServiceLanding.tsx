import Link from "next/link"
import Layout from "@/components/layout/Layout"
import SectionHead from "@/components/hm/SectionHead"
import ProcessList from "@/components/hm/ProcessList"
import FaqList from "@/components/hm/FaqList"
import ClosingCTA from "@/components/hm/ClosingCTA"
import { ServiceLandingJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd"
import { landings, type Landing } from "@/lib/landing"
import { projects, categoryLabel, resolveImg } from "@/lib/projects"

/**
 * The body of /web-development, /app-development and /ai-automation.
 *
 * Order is deliberate for search: the H1 carries the keyword, and the
 * `.hm-answer` paragraph right under it is a self-contained, citable answer to
 * "who does X" (it's what AI Overviews and ChatGPT lift). Proof comes next so
 * the claim is checkable on the same page.
 */
export default function ServiceLanding({ landing }: { landing: Landing }) {
	const proof = landing.proof
		.map((s) => projects.find((p) => p.slug === s))
		.filter((p): p is (typeof projects)[number] => Boolean(p))
	const others = landings.filter((l) => l.slug !== landing.slug)

	return (
		<Layout headerStyle={1} footerStyle={1}>
			<ServiceLandingJsonLd landing={landing} />
			<BreadcrumbJsonLd
				trail={[
					{ name: "Services", path: "/services" },
					{ name: landing.tag, path: `/${landing.slug}` },
				]}
			/>

			<section className="hm-section hm-section--tight">
				<div className="hm-wrap">
					<div className="hm-narrow">
						<span className="hm-eyebrow">{landing.tag}</span>
						<h1 className="hm-h1">
							{landing.h1} <span className="hm-accent">{landing.h1Accent}</span>
						</h1>
						<p className="hm-lede">{landing.lede}</p>
						<div className="hm-actions">
							<Link href="/#contact" className="hm-btn hm-btn--primary">
								Book a Call
								<i className="ri-arrow-right-line" />
							</Link>
							<Link href="/website-plans" className="hm-btn hm-btn--ghost">
								See pricing
							</Link>
						</div>
						<p className="hm-answer">{landing.answer}</p>
					</div>
				</div>
			</section>

			<section className="hm-section hm-section--ruled">
				<div className="hm-wrap">
					<SectionHead
						eyebrow="What's included"
						title={
							<>
								{landing.tag} <span className="hm-accent">services</span>
							</>
						}
					/>
					<div className="hm-pillars" data-reveal data-reveal-stagger>
						{landing.offers.map((o) => (
							<div className="hm-pillar" key={o.title}>
								<h3 className="hm-h3">{o.title}</h3>
								<p>{o.body}</p>
							</div>
						))}
					</div>
					<div className="hm-tags hm-mt-sm">
						{landing.stack.map((t) => (
							<span className="hm-tag" key={t}>
								{t}
							</span>
						))}
					</div>
				</div>
			</section>

			<section className="hm-section hm-section--sunk">
				<div className="hm-wrap">
					<SectionHead
						eyebrow="Proof"
						title={
							<>
								{landing.tag} <span className="hm-accent">projects</span>
							</>
						}
						lede="Linked projects are live right now, so you can open them and check."
						action={{ label: "All work", href: "/work" }}
					/>
					<div className="hm-work" data-reveal data-reveal-stagger>
						{proof.map((p) => (
							<article className="hm-card" key={p.slug}>
								<Link href="/work" className="hm-card__media" aria-label={`See ${p.title} in my work`}>
									<img src={resolveImg(p.cover)} alt={`${p.title}: ${p.tagline}`} loading="lazy" />
								</Link>
								<div className="hm-card__body">
									<span className="hm-card__meta">{categoryLabel[p.category]}</span>
									<h3 className="hm-h3">
										{p.url ? (
											<a className="hm-card__link" href={p.url} target="_blank" rel="noopener noreferrer">
												{p.title}
												<i className="ri-arrow-right-up-line" style={{ fontSize: ".85em", marginLeft: ".25rem" }} />
											</a>
										) : (
											p.title
										)}
									</h3>
									<p>{p.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<ProcessList />
			<FaqList faqs={landing.faqs} path={`/${landing.slug}`} />

			<section className="hm-section hm-section--ruled hm-section--tight">
				<div className="hm-wrap">
					<span className="hm-eyebrow">Also available</span>
					<div className="hm-actions">
						{others.map((o) => (
							<Link key={o.slug} href={`/${o.slug}`} className="hm-btn hm-btn--ghost">
								{o.tag}
								<i className="ri-arrow-right-line" />
							</Link>
						))}
						<Link href="/services" className="hm-btn hm-btn--ghost">
							All services
						</Link>
					</div>
				</div>
			</section>

			<ClosingCTA />
		</Layout>
	)
}
