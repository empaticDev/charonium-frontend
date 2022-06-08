import classNames from 'classnames/bind'
import styles from './animation.module.scss'

import { PartialHeading, PartialTextBlock } from '@components/partial'
import { useEffect, useState } from 'react'
import React from 'react'

let cx = classNames.bind(styles)

var imagesPreloaded = []

export default function Animation({ title, label, section }) {
	let className = cx({
		animation: true,
	})

	const frameCount = 476
	const [scroll, setScroll] = useState(1)
	const getFrame = (index) =>
		'animation/web-animation-' + index.toString().padStart(5, '0') + '.png'

	var component
	var canvas
	var context

	const preloadImages = () => {
		for (let i = 1; i <= frameCount; i++) {
			var img = new Image()
			img.src = getFrame(i)
			imagesPreloaded.push(img)
		}
	}

	useEffect(() => {
		preloadImages()

		component = document.getElementById('component')
		canvas = document.getElementById('animation-canvas')
		context = canvas.getContext('2d')
		canvas.width = 960
		canvas.height = 540

		context.drawImage(imagesPreloaded[0], 0, 0)
	}, [])

	useEffect(() => {
		component = document.getElementById('component')
		canvas = document.getElementById('animation-canvas')
		context = canvas.getContext('2d')
		canvas.width = 960
		canvas.height = 540

		const frameIndex = Math.min(frameCount - 1, scroll)
		context.drawImage(imagesPreloaded[frameIndex], 0, 0)
	})

	const scrollEvent = () => {
		component = document.getElementById('component')
		const scrollTop = component.scrollTop
		const maxScrollTop = component.scrollHeight - window.innerHeight
		const scrollFraction = scrollTop / maxScrollTop
		const frameIndex = Math.min(
			frameCount - 1,
			Math.ceil(scrollFraction * frameCount)
		)

		requestAnimationFrame(() => {
			setScroll(frameIndex + 1)
		})
	}

	let zukunft = {
		title: section[0].title,
		label: '3,7 mio Bitcoin für immer verloren',
		content: section[0].text,
		heading: 'h2',
	}

	let fragments = {
		title: section[1].title,
		content: section[1].text,
		heading: 'h3',
	}

	let key = {
		title: section[2].title,
		content: section[2].text,
		heading: 'h3',
	}

	let obolus = {
		title: section[3].title,
		content: section[3].text,
		heading: 'h3',
	}

	let nft = {
		title: section[4].title,
		content: section[4].text,
		heading: 'h3',
	}

	return (
		<div className={className} id="component-wrapper">
			<div className={styles.content} id="component" onScroll={scrollEvent}>
				<div className={styles.wrapper}>
					<canvas className={styles.mycanvas} id="animation-canvas"></canvas>
					<div className={(styles.textblock, styles.one)}>
						<PartialTextBlock {...zukunft} />
					</div>
					<div className={(styles.textblock, styles.two)}>
						<PartialTextBlock {...fragments} />
					</div>
					<div className={(styles.textblock, styles.three)}>
						<PartialTextBlock {...key} />
					</div>
					<div className={(styles.textblock, styles.three)}>
						<PartialTextBlock {...obolus} />
					</div>
					<div className={(styles.textblock, styles.three)}>
						<PartialTextBlock {...nft} />
					</div>
				</div>
			</div>
		</div>
	)
}
