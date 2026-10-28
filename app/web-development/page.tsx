import ServiceLanding from "@/components/hm/ServiceLanding"
import { pageMetadata } from "@/lib/seo"
import { getLanding } from "@/lib/landing"

const landing = getLanding("web-development")

export const metadata = pageMetadata({
	title: landing.metaTitle,
	description: landing.metaDescription,
	path: "/web-development",
	tag: landing.tag,
	ogTitle: `${landing.h1} ${landing.h1Accent}`,
	keywords: landing.keywords,
})

export default function Page() {
	return <ServiceLanding landing={landing} />
}
