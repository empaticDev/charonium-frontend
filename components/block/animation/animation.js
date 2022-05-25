import classNames from 'classnames/bind'
import styles from './animation.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialHeading } from '@components/partial'
import { useEffect, useState } from 'react'
import React from 'react'

// import Image from 'next/image'

let cx = classNames.bind(styles)

export default function Animation({ title, label, images }) {
	let className = cx({
		animation: true,
	})

	const frameCount = 65
	const [scroll, setScroll] = useState(1)
	const currentFrame = (index) =>
		'animation/web-animation-' + index.toString().padStart(5, '0') + '.png'

	const preloadImages = () => {
		for (let i = 1; i < frameCount; i++) {
			var img = new Image()
			img.src = currentFrame(i)
		}
	}

	var component
	var canvas
	var context

	useEffect(() => {
		preloadImages()
	}, [])

	useEffect(() => {
		component = document.getElementById('component')
		canvas = document.getElementById('animation-canvas')
		context = canvas.getContext('2d')
		canvas.width = 960
		canvas.height = 540

		var img = new Image()
		img.src = currentFrame(scroll)
		img.onload = function () {
			context.drawImage(img, 0, 0)
		}
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

	return (
		<BlockWrapper id="component-wrapper">
			<PartialHeading title={title} label={label} heading={'h2'} />
			<div className={className} id="component" onScroll={scrollEvent}>
				<div className={styles.wrapper}>
					<canvas className={styles.mycanvas} id="animation-canvas"></canvas>
				</div>
			</div>
		</BlockWrapper>
	)
}
