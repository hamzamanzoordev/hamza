'use client'

import { useEffect } from 'react'

/**
 * Stacked case-study cards (same mechanism as zynhive.com's work section).
 *
 * Adds `is-stacking` to `.hm-cases`, which makes every `.hm-stack-item`
 * sticky. Each item's top is min(96 + 18·i, viewport − height − 24): cards
 * step down 18px so the edges of earlier cards peek out, and a card taller
 * than the screen sticks low enough that its bottom is visible before the
 * next one covers it. While the next card slides over, the covered card gets
 * `--cover` 0 → 1, which CSS turns into a slight scale-back and dim.
 *
 * Without JS, or with reduced motion, the cards are a plain list.
 */
export default function CaseStackMotion() {
	useEffect(() => {
		const root = document.querySelector<HTMLElement>('.hm-cases')
		if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		const items = Array.from(root.querySelectorAll<HTMLElement>('.hm-stack-item'))
		if (items.length < 2) return

		const place = () => {
			items.forEach((el, i) => {
				const top = Math.min(96 + 18 * i, window.innerHeight - el.offsetHeight - 24)
				el.style.top = `${top}px`
			})
		}

		let frame = 0
		const measure = () => {
			frame = 0
			items.forEach((el, i) => {
				const next = items[i + 1]
				if (!next) return
				const a = el.getBoundingClientRect()
				const b = next.getBoundingClientRect()
				const cover = Math.min(1, Math.max(0, (a.bottom - b.top) / a.height))
				el.style.setProperty('--cover', cover.toFixed(3))
			})
		}
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(measure)
		}
		const onResize = () => {
			place()
			onScroll()
		}

		root.classList.add('is-stacking')
		place()
		measure()

		// Capture: this page scrolls on <body>, whose scroll events don't reach window.
		document.addEventListener('scroll', onScroll, { capture: true, passive: true })
		window.addEventListener('resize', onResize)
		const ro = new ResizeObserver(onResize)
		items.forEach((el) => ro.observe(el))

		return () => {
			document.removeEventListener('scroll', onScroll, { capture: true })
			window.removeEventListener('resize', onResize)
			ro.disconnect()
			if (frame) cancelAnimationFrame(frame)
			root.classList.remove('is-stacking')
			items.forEach((el) => {
				el.style.top = ''
				el.style.removeProperty('--cover')
			})
		}
	}, [])

	return null
}
