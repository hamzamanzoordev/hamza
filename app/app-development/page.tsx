import ServiceLanding from "@/components/hm/ServiceLanding"
import { pageMetadata } from "@/lib/seo"
import { getLanding } from "@/lib/landing"

const landing = getLanding("app-development")

export const metadata = pageMetadata({
	title: landing.metaTitle,
	description: landing.metaDescription,
	path: "/app-development",
	tag: landing.tag,
	ogTitle: `${landing.h1} ${landing.h1Accent}`,
	keywords: landing.keywords,
})

export default function Page() {
	return <ServiceLanding landing={landing} />
}
