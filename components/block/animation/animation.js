import classNames from 'classnames/bind'
import styles from './animation.module.scss'

import { PartialHeading, PartialTextBlock } from '@components/partial'
import { useEffect, useState } from 'react'
import React from 'react'

let cx = classNames.bind(styles)

export default function Animation({ title, label, images }) {
	let className = cx({
		animation: true,
	})

	const frameCount = 476
	const [scroll, setScroll] = useState(1)
	const currentFrame = (index) =>
		'animation/web-animation-' + index.toString().padStart(5, '0') + '.png'

	var component
	var canvas
	var context

	const preloadImages = () => {
		for (let i = 1; i < frameCount; i++) {
			var img = new Image()
			img.src = currentFrame(i)
		}
	}

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

	let zukunft = {
		title: 'Die Zukunft des Vererbens',
		label: '3,7 mio Bitcoin für immer verloren',
		content:
			'Der Private Schlüssel repräsentiert die volle Kontrolle und das Eigentum an Kryptowährungen und sonstigen digitalen Vermögenswerten. Es ist essentiell, dass der Private Schlüssel unter keinen Umständen verloren geht.<p></p>CHARONIUM bietet die weltweit erste All-in-One-Lösung, die eine sichere Verwahrung und eine begleitende Auflösung der Erbschaft der digitaler Assets ermöglicht.',
		heading: 'h2',
	}

	let fragments = {
		title: 'Charonium Fragments',
		content:
			'Der Private Schlüssel des Nutzers wird auf den CHARONIUM Fragments gespeichert. Jedes einzelne Teilstück wird an einem anderen, sicheren Ort aufbewahrt.<p></p>Das heißt, wir bieten die weltweit erste kundenspezifische Lösung der Auflösung von digitalen Assets zusammen mit einer Krypto Wallet ohne kompletten Ausfall bei Verlust eines Teil-Fragments.',
		heading: 'h3',
	}

	let key = {
		title: 'Save Your Key',
		content:
			'Der Seed Phrase (Backup Phrase) besteht aus Wörtern, die aus einer Liste mit 2048 Wörtern ausgewählt werden. Die richtigen Wörter, in der richtigen Reihenfolge , ermöglicht eine Wiederherstellung.<p></p>Jedes Wort entspricht einem vierstelligen numerischen Code. Diese 4-stelligen Codes werden in der entsprechenden Zeile auf dem feuerbeständigen, Edelstahl CHARONIUM Fragment verewigt, indem sie mit einem Meißel eingraviert werden.',
		heading: 'h3',
	}

	let obolus = {
		title: 'Save Your Key',
		content:
			'Der Seed Phrase (Backup Phrase) besteht aus Wörtern, die aus einer Liste mit 2048 Wörtern ausgewählt werden. Die richtigen Wörter, in der richtigen Reihenfolge , ermöglicht eine Wiederherstellung.<p></p>Jedes Wort entspricht einem vierstelligen numerischen Code. Diese 4-stelligen Codes werden in der entsprechenden Zeile auf dem feuerbeständigen, Edelstahl CHARONIUM Fragment verewigt, indem sie mit einem Meißel eingraviert werden.',
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
				</div>
			</div>
		</div>
	)
}
