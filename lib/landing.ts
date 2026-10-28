/**
 * Service landing pages: /web-development, /app-development, /ai-automation.
 *
 * One page per search intent. /services covers everything at once, which is
 * right for a visitor and wrong for a ranking: Google (and the answer engines)
 * want one page that is unambiguously *about* "web development" to point a
 * query at. Each entry here is that page, written around the phrase people
 * actually type, with its own FAQ so the questions match the query.
 *
 * Same honesty rule as lib/proof.ts: the proof slugs point at real projects in
 * lib/projects.ts, and nothing below claims a result that isn't on the site.
 */

import type { Faq } from "./proof"

export interface Landing {
	slug: "web-development" | "app-development" | "ai-automation"
	/** <title>, before the brand suffix. Leads with the keyword. */
	metaTitle: string
	metaDescription: string
	/** Eyebrow + OG tag. */
	tag: string
	/** The H1. Contains the exact keyword. */
	h1: string
	h1Accent: string
	lede: string
	/** Short, quotable definition paragraph: the passage answer engines lift. */
	answer: string
	/** What's included, as scannable cards. */
	offers: { title: string; body: string }[]
	stack: string[]
	/** Project slugs from lib/projects.ts. */
	proof: string[]
	faqs: Faq[]
	/** schema.org serviceType. */
	serviceType: string
	keywords: string[]
}

export const landings: Landing[] = [
	{
		slug: "web-development",
		metaTitle: "Web Development Services",
		metaDescription:
			"Freelance web development by Hamza Manzoor: fast Next.js and React websites and web apps with SEO built in. Fixed prices from $999, or $35/hour.",
		tag: "Web Development",
		h1: "Web development that",
		h1Accent: "ships and ranks",
		lede: "Websites and web apps built in Next.js and React, designed, developed and launched by one developer. Performance, SEO and a CMS you can edit yourself are part of the build, not extras.",
		answer:
			"Hamza Manzoor is a freelance web developer and founder of ZynHive who builds websites and web applications end to end: design, frontend, backend, hosting and launch. Fixed-price website packages start at $999, smaller jobs are $35 an hour, and full web apps with accounts and payments are quoted per project, typically between $4,000 and $20,000.",
		offers: [
			{
				title: "Business and marketing websites",
				body: "Company sites, portfolios and landing pages that load fast and are structured for search from day one.",
			},
			{
				title: "Custom web applications",
				body: "Dashboards, marketplaces and SaaS products with accounts, payments, admin panels and APIs.",
			},
			{
				title: "E-commerce stores",
				body: "Storefronts with product catalogues, checkout and the integrations your business already runs on.",
			},
			{
				title: "Technical SEO built in",
				body: "Structured data, sitemaps, Open Graph images and real Core Web Vitals, so the site can be found after it launches.",
			},
		],
		stack: ["Next.js", "React", "TypeScript", "Node.js", "WordPress", "PostgreSQL", "Stripe"],
		proof: ["wecinema", "paintedbyus", "risbyhomes", "quantumfunding", "votingbuddy", "xiaomi-store"],
		faqs: [
			{
				q: "How much does a website cost?",
				a: "Fixed-price website packages start at $999 and every tier is listed on the Website Plans page with its scope and timeline. Smaller jobs are $35 an hour. Custom web apps with accounts or payments are quoted after one call and typically land between $4,000 and $20,000.",
			},
			{
				q: "Do you build with Next.js or WordPress?",
				a: "Both. The choice depends on who maintains the site afterwards. Next.js is faster and more flexible for products and custom builds; WordPress is better when a non-technical team needs to edit everything themselves.",
			},
			{
				q: "Is SEO included in web development?",
				a: "Technical SEO is part of every build: structured data, an XML sitemap, canonical URLs, Open Graph images, fast Core Web Vitals and a clean heading structure. Ongoing content and link building are separate work.",
			},
			{
				q: "Can you take over an existing website?",
				a: "Yes. Picking up an existing codebase for fixes, new features or a performance pass is common, and it's usually billed hourly at $35 with an estimate before any time is spent.",
			},
		],
		serviceType: "Web Development",
		keywords: [
			"web development",
			"web developer",
			"freelance web developer",
			"Next.js developer",
			"React developer",
			"website development services",
			"custom web app development",
		],
	},
	{
		slug: "app-development",
		metaTitle: "App Development: iOS, Android & Cross-Platform",
		metaDescription:
			"Mobile app development by Hamza Manzoor: iOS and Android apps in SwiftUI, Flutter and React Native, built and launched to the App Store and Google Play.",
		tag: "App Development",
		h1: "App development, from idea to",
		h1Accent: "the App Store",
		lede: "iOS and Android apps built natively in SwiftUI or cross-platform in Flutter and React Native, with the backend, the companion website and the store submission handled by the same person.",
		answer:
			"Hamza Manzoor is a freelance mobile app developer who builds iOS and Android apps end to end: UI design, the app itself, the backend and API, and App Store and Google Play submission. He uses SwiftUI for native iOS and Flutter or React Native for cross-platform apps. Live apps include MadeInPK, GlazeMe and FaceMeQuiz.",
		offers: [
			{
				title: "iOS apps in SwiftUI",
				body: "Native iPhone apps where platform feel, performance and Apple features like in-app purchase matter.",
			},
			{
				title: "Cross-platform apps",
				body: "One Flutter or React Native codebase for iOS and Android when reach and budget matter more than platform-specific polish.",
			},
			{
				title: "Backend and admin",
				body: "Accounts, payments, push notifications, real-time data and an admin panel to run the business behind the app.",
			},
			{
				title: "Store launch",
				body: "App Store and Google Play submission, review fixes and the first weeks of bug reports after launch.",
			},
		],
		stack: ["SwiftUI", "Flutter", "React Native", "Node.js", "PostgreSQL", "Stripe", "Game Center"],
		proof: ["madeinpk", "glazeme", "facemequiz", "food-order-app", "plant-scanner-app"],
		faqs: [
			{
				q: "How much does it cost to build an app?",
				a: "Mobile apps are quoted per project after a scoping call, because the cost depends almost entirely on what ships in version one. Most land between $4,000 and $20,000 including the backend and store launch.",
			},
			{
				q: "Should I build native or cross-platform?",
				a: "Cross-platform (Flutter or React Native) is the right default when you need iOS and Android on a budget. Native SwiftUI is worth it when the app depends heavily on Apple platform features or needs the best possible feel on iPhone.",
			},
			{
				q: "Do you handle App Store and Google Play submission?",
				a: "Yes. Submission, review feedback and resubmission are part of the build. Getting through review is where many app projects stall, so it's treated as part of the job rather than a follow-up.",
			},
			{
				q: "Can the app have a website too?",
				a: "Yes, and most do. MadeInPK runs on iOS, Android and web, and GlazeMe and FaceMeQuiz each have a companion website. Planning both together is where building with one developer saves the most time.",
			},
		],
		serviceType: "Mobile App Development",
		keywords: [
			"app development",
			"mobile app developer",
			"iOS app developer",
			"Android app development",
			"Flutter developer",
			"React Native developer",
			"SwiftUI developer",
		],
	},
	{
		slug: "ai-automation",
		metaTitle: "AI Automation & AI Chatbot Development",
		metaDescription:
			"AI automation by Hamza Manzoor: GPT chatbots for WhatsApp and web, workflow automation and LLM features built into real products, with costs planned up front.",
		tag: "AI Automation",
		h1: "AI automation that",
		h1Accent: "does real work",
		lede: "Chatbots, workflow automation and LLM features that take repetitive work off your team, built into the tools you already use and scoped so the running costs are known before launch.",
		answer:
			"Hamza Manzoor builds AI automation for businesses: GPT-powered chatbots on WhatsApp and websites, automated workflows that connect the apps a team already uses, and AI features such as generation, classification and image recognition inside web and mobile products. Each project starts by checking whether AI is the right tool, because a simpler automation is often cheaper and more reliable.",
		offers: [
			{
				title: "AI chatbots for WhatsApp and web",
				body: "Conversational assistants that answer customers, qualify leads and hand over to a person when they should.",
			},
			{
				title: "Business workflow automation",
				body: "Connecting forms, CRMs, email, spreadsheets and internal tools so data moves without anyone copying it by hand.",
			},
			{
				title: "LLM features inside products",
				body: "Text generation, summarisation, classification and search built into a web or mobile app's real user flows.",
			},
			{
				title: "Vision and recognition",
				body: "Image classification and recognition where it fits, such as the plant-disease scanner in the portfolio.",
			},
		],
		stack: ["OpenAI API", "GPT", "WhatsApp", "Landbot", "Node.js", "Flutter"],
		proof: ["whatsapp-ai-chatbot", "landbot-chatbot", "glazeme", "plant-scanner-app"],
		faqs: [
			{
				q: "What is AI automation?",
				a: "AI automation uses language models and other AI to handle tasks that used to need a person, such as answering customer messages, sorting incoming requests, drafting replies or extracting data from documents, and connects that to the rest of a business's tools so the work completes on its own.",
			},
			{
				q: "Can you build a WhatsApp AI chatbot?",
				a: "Yes. The portfolio includes an AI WhatsApp chatbot that handles customer chats end to end. These bots can answer questions from your own content, collect details and pass the conversation to a person when needed.",
			},
			{
				q: "How much does AI automation cost to run?",
				a: "Running cost depends on message volume and the model used, so it's estimated before anything is built. Low-volume automations are usually inexpensive to run; high-volume chatbots cost more, and that monthly number is agreed before the build starts.",
			},
			{
				q: "Do I actually need AI for this?",
				a: "Not always. Plenty of automation is better done with simple rules and integrations, which are cheaper and more predictable. If that's the case for your problem, you'll be told so before any AI work is quoted.",
			},
		],
		serviceType: "AI Automation",
		keywords: [
			"AI automation",
			"AI automation agency",
			"AI chatbot developer",
			"WhatsApp AI chatbot",
			"workflow automation",
			"GPT integration",
			"LLM developer",
		],
	},
]

export const getLanding = (slug: Landing["slug"]): Landing => {
	const l = landings.find((x) => x.slug === slug)
	if (!l) throw new Error(`Unknown landing: ${slug}`)
	return l
}
