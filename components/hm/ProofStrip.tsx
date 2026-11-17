import { CLIENT_MARKS, type ClientMark } from "@/lib/proof"

function Mark({ m, hidden }: { m: ClientMark; hidden?: boolean }) {
	const inner = (
		<>
			<span className="hm-marquee__dot" aria-hidden="true" />
			{m.name}
		</>
	)
	return (
		<li aria-hidden={hidden || undefined}>
			{m.url ? (
				<a href={m.url} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : undefined}>
					{inner}
				</a>
			) : (
				<span>{inner}</span>
			)}
		</li>
	)
}

/**
 * Wordmarks of shipped products, as a slow marquee. Each links out, so the
 * claim is checkable. The list is rendered twice so the loop is seamless;
 * the second copy is hidden from assistive tech and the tab order.
 */
export default function ProofStrip() {
	if (!CLIENT_MARKS.length) return null

	return (
		<section className="hm-marks" aria-label="Shipped products">
			<div className="hm-wrap">
				<p className="hm-marks__label">Shipped and live. Click any of them</p>
			</div>
			<div className="hm-marquee">
				<ul className="hm-marquee__track">
					{CLIENT_MARKS.map((m) => (
						<Mark m={m} key={m.name} />
					))}
					{CLIENT_MARKS.map((m) => (
						<Mark m={m} key={`dup-${m.name}`} hidden />
					))}
				</ul>
			</div>
		</section>
	)
}
