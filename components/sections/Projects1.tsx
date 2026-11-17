import SectionHead from "@/components/hm/SectionHead"
import CaseStudyStack from "@/components/hm/CaseStudyStack"

export default function Projects1() {
	return (
		<section className="hm-section" id="projects">
			<div className="hm-wrap">
				<SectionHead
					eyebrow="Selected work"
					title={
						<>
							Products that are <span className="hm-accent">live right now</span>
						</>
					}
					lede="Marketplaces, fintech platforms, and App Store apps. Every one of these has a link you can open."
					action={{ label: "All projects", href: "/work" }}
				/>

				<CaseStudyStack />
			</div>
		</section>
	)
}
