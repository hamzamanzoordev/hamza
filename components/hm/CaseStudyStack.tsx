import Link from "next/link"
import Image from "next/image"
import { caseStudies, getCaseStudyProject } from "@/lib/caseStudies"
import { resolveImg } from "@/lib/projects"
import CaseStackMotion from "@/components/elements/CaseStackMotion"

/**
 * Brand tint behind each cover image. Presentation only, picked from each
 * product's own cover art, so it lives here rather than in the data file.
 */
const tint: Record<string, string> = {
	madeinpk: "#1f6b45",
	glazeme: "#f07a2c",
	facemequiz: "#8b5cf6",
	wecinema: "#e8912a",
}

/** First `n` sentences of a paragraph, for the card's short columns. */
function sentences(text: string, n: number) {
	const parts = text.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [text]
	return parts.slice(0, n).join("").trim()
}

/**
 * Case studies as large split cards that stack as you scroll: each one is
 * sticky, so the next card slides up over the previous. Content comes from
 * lib/caseStudies.ts. Challenge, insight (the reasoning behind the first key
 * decision) and what shipped.
 */
export default function CaseStudyStack() {
	return (
		<div className="hm-cases">
			<CaseStackMotion />
			{caseStudies.map((c, i) => {
				const project = getCaseStudyProject(c.slug)
				const cover = project ? resolveImg(project.cover) : resolveImg(c.gallery[0])
				return (
					<div className="hm-stack-item" key={c.slug} style={{ "--i": i } as React.CSSProperties}>
					<article
						className={`hm-case${i % 2 ? " hm-case--flip" : ""}`}
						style={{ "--case-tint": tint[c.slug] ?? "#0ea5e9" } as React.CSSProperties}
					>
						<div className="hm-case__body">
							<ul className="hm-case__tags">
								{c.platforms.map((p) => (
									<li key={p}>{p}</li>
								))}
								<li className="hm-case__tag--kind">{c.shortKind}</li>
							</ul>

							<h3 className="hm-case__title">{c.title}</h3>

							<div className="hm-case__cols">
								<div>
									<p className="hm-case__label">The challenge</p>
									<p>{sentences(c.challenge, 2)}</p>
								</div>
								<div>
									<p className="hm-case__label">The insight</p>
									<p>{sentences(c.decisions[0]?.why ?? c.context, 2)}</p>
								</div>
							</div>

							<div className="hm-case__did">
								<p className="hm-case__label">What I did</p>
								<ul>
									{c.shipped.slice(0, 3).map((s) => (
										<li key={s}>
											<i className="ri-check-line" aria-hidden="true" />
											{s}
										</li>
									))}
								</ul>
							</div>

							<div className="hm-case__foot">
								<Link href={`/case-studies/${c.slug}`} className="hm-btn hm-btn--primary">
									Read the case study
									<i className="ri-arrow-right-line" />
								</Link>
								<span className="hm-case__stack">{c.stack.slice(0, 4).join(" · ")}</span>
							</div>
						</div>

						<div className="hm-case__media">
							{project?.url ? (
								<a
									className="hm-case__pill"
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{c.navLabel}
									<i className="ri-arrow-right-up-line" aria-hidden="true" />
								</a>
							) : (
								<span className="hm-case__pill">{c.navLabel}</span>
							)}
							<div className="hm-case__shot">
								<Image
									src={cover}
									alt={`${c.navLabel} screens`}
									width={1000}
									height={750}
									sizes="(max-width: 900px) 92vw, 560px"
								/>
							</div>
						</div>
					</article>
					</div>
				)
			})}
		</div>
	)
}
