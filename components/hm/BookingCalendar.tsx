import SectionHead from "@/components/hm/SectionHead"
import { BOOKING_URL, CONTACT, bookingEmbedUrl } from "@/lib/proof"

const expect = [
	{ icon: "ri-time-line", title: "30 minutes", body: "Enough to understand the product and who it's for." },
	{ icon: "ri-video-chat-line", title: "Google Meet", body: "The link arrives in your calendar invite automatically." },
	{ icon: "ri-file-list-3-line", title: "A real number", body: "You leave with a scope and a price range, not a sales pitch." },
	{ icon: "ri-hand-heart-line", title: "No obligation", body: "If I'm not the right fit, I'll say so and point you elsewhere." },
]

/**
 * Inline Google Calendar appointment schedule. Google shows live
 * availability, handles time zones, creates the event with a Meet link and
 * sends confirmations. Renders nothing until BOOKING_URL is set in
 * lib/proof.ts.
 */
export default function BookingCalendar() {
	if (!BOOKING_URL) return null

	return (
		<section className="hm-section" id="book">
			<div className="hm-wrap">
				<SectionHead
					eyebrow="Book a call"
					title={
						<>
							Pick a time that <span className="hm-accent">works for you</span>
						</>
					}
					lede="Choose any open slot below. It goes straight into my calendar and you get an invite with a Google Meet link."
				/>

				<div className="hm-book" data-reveal>
					<aside className="hm-book__aside">
						<p className="hm-book__label">What to expect</p>
						<ul className="hm-book__list">
							{expect.map((e) => (
								<li key={e.title}>
									<span className="hm-book__icon">
										<i className={e.icon} aria-hidden="true" />
									</span>
									<span>
										<strong>{e.title}</strong>
										<span>{e.body}</span>
									</span>
								</li>
							))}
						</ul>
						<div className="hm-book__alt">
							<p>Times don&apos;t work?</p>
							<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
								<i className="ri-whatsapp-line" aria-hidden="true" /> Message on WhatsApp
							</a>
							<a href={`mailto:${CONTACT.email}`}>
								<i className="ri-mail-line" aria-hidden="true" /> {CONTACT.email}
							</a>
						</div>
					</aside>

					<div className="hm-book__frame">
						<iframe
							src={bookingEmbedUrl()}
							title="Book a call with Hamza Manzoor (Google Calendar)"
							loading="lazy"
						/>
						<a
							className="hm-book__open"
							href={BOOKING_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							Open the booking page in a new tab
							<i className="ri-arrow-right-up-line" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
