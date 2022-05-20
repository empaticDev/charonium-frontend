import classNames from 'classnames/bind'
import styles from './animation.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialHeading } from '@components/partial'
import { useEffect, useState } from 'react'

import Image from 'next/image'

let cx = classNames.bind(styles)

export default function Animation({ title, label, images }) {
	let className = cx({
		animation: true,
	})

	const frameCount = images.data.length
	const initialImage = images.data[0].attributes.url

	const [scroll, setScroll] = useState(0)
	const [currentFrame, setCurrentFrame] = useState(initialImage)

	var component
	var canvas
	var context
	var image

	useEffect(() => {
		component = document.getElementById('component')
		canvas = document.getElementById('hero-lightpass')
		context = canvas.getContext('2d')

		canvas.width = 1158
		canvas.height = 770

		context.fillStyle = '#7cce2b'
		context.fillRect(0, 0, 300, 100)

		const image = () => {
			return (
				<Image
					src={currentFrame}
					width={1158}
					height={770}
					onLoad={(event) => {
						context.drawImage(img, 0, 0)
					}}
				/>
			)
		}
	})

	useEffect(() => {
		setCurrentFrame(images.data[scroll].attributes.url)
		console.log('scroll event', scroll)
	}, [scroll])

	// const preloadImages = () => {
	// 	for (let i = 1; i < frameCount; i++) {
	// 		const img = new Image(
	// 			(src = { currentFrame }),
	// 			(loader = { testLoader }),
	// 			(width = '1158'),
	// 			(height = '770')
	// 		)
	// 		img.src = currentFrame(i)
	// 	}
	// }

	// preloadImages()

	const scrollEvent = () => {
		const scrollTop = component.scrollTop
		const maxScrollTop = component.scrollHeight - window.innerHeight
		const scrollFraction = scrollTop / maxScrollTop
		const frameIndex = Math.min(
			frameCount - 1,
			Math.ceil(scrollFraction * frameCount)
		)

		requestAnimationFrame(() => setScroll(frameIndex))
	}

	return (
		<BlockWrapper id="component-wrapper">
			Animation
			<PartialHeading title={title} label={label} heading={'h2'} />
			<div className={className} id="component" onScroll={scrollEvent}>
				<div className={styles.wrapper}>
					<canvas className={styles.mycanvas} id="hero-lightpass"></canvas>
				</div>
			</div>
		</BlockWrapper>
	)
}
