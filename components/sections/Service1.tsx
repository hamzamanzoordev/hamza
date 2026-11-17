import Link from "next/link"
import { services, pillars } from "@/lib/services"
import SectionHead from "@/components/hm/SectionHead"

/** Where each home-page service card leads. */
const serviceHref: Record<string, string> = {
	"product-builds": "/services",
	"web-development": "/web-development",
	"mobile-apps": "/app-development",
	"ai-integration": "/ai-automation",
}

/** Home page: bento of service cards (first one featured), then the pillars. */
export default function Service1() {
	return (
		<section className="hm-section" id="services">
			<div className="hm-wrap">
				<SectionHead
					eyebrow="What I build"
					title={
						<>
							Four roles, <span className="hm-accent">one person</span>
						</>
					}
					lede="An agency puts a designer, two developers and a project manager between you and the product. Most of the budget goes to the coordination between them."
					action={{ label: "All services", href: "/services" }}
				/>

				<div className="hm-svc-grid" data-reveal data-reveal-stagger>
					{services.map((s, i) => (
						<article className={`hm-svc${i === 0 ? " hm-svc--featured" : ""}`} key={s.slug}>
							<div className="hm-svc__top">
								<span className="hm-svc__icon">
									<i className={s.icon} aria-hidden="true" />
								</span>
								<span className="hm-svc__num">{String(i + 1).padStart(2, "0")}</span>
							</div>
							<h3 className="hm-h3">{s.title}</h3>
							<p className="hm-svc__outcome">{s.outcome}</p>
							<p className="hm-svc__body">{s.body}</p>
							<ul className="hm-svc__list">
								{s.delivers.slice(0, i === 0 || i === 3 ? 6 : 3).map((d) => (
									<li key={d}>
										<i className="ri-check-line" aria-hidden="true" />
										{d}
									</li>
								))}
							</ul>
							<Link href={serviceHref[s.slug] ?? "/services"} className="hm-svc__link">
								Learn more
								<i className="ri-arrow-right-up-line" aria-hidden="true" />
							</Link>
						</article>
					))}
				</div>

				<div className="hm-pillars hm-mt" data-reveal data-reveal-stagger>
					{pillars.map((p) => (
						<div className="hm-pillar" key={p.title}>
							<i className={`${p.icon} hm-pillar__icon`} aria-hidden="true" />
							<h3 className="hm-h3">{p.title}</h3>
							<p>{p.body}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
