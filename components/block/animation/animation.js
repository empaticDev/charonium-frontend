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
		console.log('frame:', scroll)

		component = document.getElementById('component')
		canvas = document.getElementById('animation-canvas')
		context = canvas.getContext('2d')
		canvas.width = 960
		canvas.height = 540

		const frameIndex = Math.min(frameCount - 1, scroll)
		context.drawImage(imagesPreloaded[frameIndex], 0, 0)

		var lingradB = context.createLinearGradient(0, 500, 0, 540)
		var lingradT = context.createLinearGradient(0, 0, 0, 40)
		lingradB.addColorStop(0, 'rgba(18,18,18,0)')
		lingradB.addColorStop(1, 'rgba(18,18,18,1)')

		lingradT.addColorStop(0, 'rgba(18,18,18,1)')
		lingradT.addColorStop(1, 'rgba(18,18,18,0)')

		context.fillStyle = lingradB
		context.fillRect(0, 500, 960, 40)
		context.fillStyle = lingradT
		context.fillRect(0, 0, 960, 40)
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

	let zukunftStyles = cx({
		textblock: true,
		one: true,
		hidden: scroll <= 25 ? false : true,
		visible: scroll < 25 ? true : false,
	})

	let fragments = {
		title: section[1].title,
		content: section[1].text,
		heading: 'h3',
	}

	let fragmentsStyles = cx({
		textblock: true,
		two: true,
		hidden: scroll > 30 && scroll < 90 ? false : true,
		visible: scroll > 30 && scroll < 90 ? true : false,
	})

	let key = {
		title: section[2].title,
		content: section[2].text,
		heading: 'h3',
	}

	let keyStyles = cx({
		textblock: true,
		three: true,
		hidden: scroll > 100 && scroll < 160 ? false : true,
		visible: scroll > 100 && scroll < 160 ? true : false,
	})

	let obolus = {
		title: section[3].title,
		content: section[3].text,
		heading: 'h3',
	}

	let obolusStyles = cx({
		textblock: true,
		rest: true,
		hidden: scroll > 210 && scroll < 300 ? false : true,
		visible: scroll > 210 && scroll < 300 ? true : false,
	})

	let nft = {
		title: section[4].title,
		content: section[4].text,
		heading: 'h3',
	}

	let nftStyles = cx({
		textblock: true,
		rest: true,
		hidden: scroll > 320 && scroll < 400 ? false : true,
		visible: scroll > 320 && scroll < 400 ? true : false,
	})

	return (
		<div className={className} id="component-wrapper">
			<div className={styles.overlayt}></div>
			<div className={styles.content} id="component" onScroll={scrollEvent}>
				<div className={styles.wrapper}>
					<canvas className={styles.mycanvas} id="animation-canvas"></canvas>
					<div className={zukunftStyles}>
						<PartialTextBlock {...zukunft} />
					</div>
					<div className={fragmentsStyles}>
						<PartialTextBlock {...fragments} />
					</div>
					<div className={keyStyles}>
						<PartialTextBlock {...key} />
					</div>
					<div className={obolusStyles}>
						<PartialTextBlock {...obolus} />
					</div>
					<div className={nftStyles}>
						<PartialTextBlock {...nft} />
					</div>
				</div>
			</div>
			<div className={styles.overlayb}></div>
		</div>
	)
}
