import classNames from 'classnames/bind'
import styles from './animation.module.scss'
import NextImage from 'next/image'
// import mobileImage from '../../../public/animation/web-animation-00476.png'

import { PartialHeading, PartialTextBlock } from '@components/partial'
import { useEffect, useState } from 'react'
import React from 'react'

let cx = classNames.bind(styles)

var imagesPreloaded = []

export default function Animation({ title, label, section, mobileImage }) {
	const [mobileImageLoaded, setMobileImageLoaded] = useState(false)

	let className = cx({
		animation: true,
	})

	let imageURL = ''

	if (mobileImage.data != null) {
		imageURL = mobileImage.data.attributes.url
	}

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
		hidden: scroll > 190 && scroll < 280 ? false : true,
		visible: scroll > 190 && scroll < 280 ? true : false,
	})

	let nft = {
		title: section[4].title,
		content: section[4].text,
		heading: 'h3',
	}

	let nftStyles = cx({
		textblock: true,
		rest: true,
		hidden: scroll > 300 && scroll < 380 ? false : true,
		visible: scroll > 300 && scroll < 380 ? true : false,
	})

	let imageClass = cx({
		mobileimage: true,
		notloaded: !mobileImageLoaded,
		loaded: mobileImageLoaded,
	})

	return (
		<div className={className} id="component-wrapper">
			<div className={styles.graphic}>
				<svg
					width="927"
					height="1185"
					viewBox="0 0 927 1185"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M308.208 541.164C386.966 844.058 630.229 997.271 808.144 1113.56L926.534 1184.73L814.842 1102.42C681.073 1035.42 378.882 798.804 316.451 527.451C238.413 188.26 215.244 141.663 184.306 110.23C159.556 85.0837 149.608 36.7198 35.4305 0.363741C19.4304 16.3638 20.9304 12.8638 0.93047 32.8638C21.3137 53.1425 145.143 94.6698 176.836 122.657C236.427 175.282 265.237 375.902 308.208 541.164Z" />
				</svg>
			</div>
			<div className={styles.overlayt}></div>
			<div className={styles.content} id="component" onScroll={scrollEvent}>
				<div className={styles.wrapper}>
					<canvas className={styles.mycanvas} id="animation-canvas"></canvas>
					<div className={imageClass}>
						<NextImage
							className={styles.staticimage}
							src={imageURL}
							layout={'fill'}
							onLoadingComplete={() => {
								setMobileImageLoaded(true)
							}}
						/>
					</div>
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
