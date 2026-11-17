import Link from "next/link"
import Image from "next/image"
import { CONTACT, METRICS, BOOK_HREF } from "@/lib/proof"

/** Delivered, live-and-verifiable, years. All sourced in lib/proof.ts. */
const heroStats = [METRICS[0], METRICS[2], METRICS[3]]

const stack = ["React", "Next.js", "React Native", "SwiftUI", "Flutter", "Node", "AI"]

export default function Home1() {
	return (
		<section className="hm-hero">
			<div className="hm-wrap">
				<div className="hm-hero__grid">
					<div className="hm-hero__copy">
						<span className="hm-status">
							<span className="hm-status__dot" />
							{CONTACT.availability}
						</span>

						<h1 className="hm-h1">
							One person. Design, web, mobile, backend.{" "}
							<span className="hm-accent">Launched.</span>
						</h1>

						<p className="hm-lede">
							I&apos;m Hamza Manzoor, a developer working across{" "}
							<Link href="/web-development">web development</Link>,{" "}
							<Link href="/app-development">app development</Link> and{" "}
							<Link href="/ai-automation">AI automation</Link>. I take products from an
							idea to something real people use, without you having to assemble a team
							to do it.
						</p>

						<div className="hm-actions">
							<Link href={BOOK_HREF} className="hm-btn hm-btn--primary hm-btn--lg">
								Book a free call
								<i className="ri-arrow-right-line" />
							</Link>
							<Link href="/work" className="hm-btn hm-btn--ghost hm-btn--lg">
								See the work
							</Link>
						</div>

						<p className="hm-reassure">
							<i className="ri-time-line" aria-hidden="true" /> 30-minute call &middot; no
							commitment &middot; you leave with a real number
						</p>

						<dl className="hm-hero__stats">
							{heroStats.map((m) => (
								<div className="hm-hero__stat" key={m.label}>
									<dt>{m.label}</dt>
									<dd>{m.value}</dd>
								</div>
							))}
						</dl>
					</div>

					<div className="hm-hero__figure">
						<div className="hm-hero__panel">
							<Image
								src="/assets/imgs/hero/hero-1/profile.png"
								alt="Hamza Manzoor"
								width={500}
								height={500}
								priority
								sizes="(max-width: 900px) 22rem, 28rem"
							/>
						</div>

						<div className="hm-hero__badge">
							<span className="hm-hero__badge-icon" aria-hidden="true">
								<i className="ri-verified-badge-fill" />
							</span>
							<span className="hm-hero__badge-text">
								<strong>Hamza Manzoor</strong>
								<span>
									Product engineer &middot; Founder of{" "}
									<a href="https://zynhive.com" target="_blank" rel="noopener noreferrer">
										ZynHive
									</a>
								</span>
							</span>
						</div>

						<ul className="hm-hero__stack" aria-label="Daily stack">
							{stack.map((t) => (
								<li key={t}>{t}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
