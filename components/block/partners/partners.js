import classNames from 'classnames/bind'
import styles from './partners.module.scss'
import Image from 'next/image'
import { useState } from 'react'

import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

import { SharedPartialManager } from '@components/shared'

import { PartialHeading, PartialButton } from '@components/partial'

let cx = classNames.bind(styles)

export default function Partners({
	id,
	anchor,
	label,
	title,
	content,
	heading,
	partners,
	subtitle,
	subcontent,
	listTitle,
	list,
	cta,
	decoration,
	image,
}) {
	let className = cx({
		partners: true,
	})

	const [imageLoaded, setImageLoaded] = useState(false)
	let imageURL = ''

	if (image.data != null) {
		imageURL = image.data.attributes.url
	}

	let imageClass = cx({
		image: true,
		notloaded: !imageLoaded,
		loaded: imageLoaded,
	})

	let textBlockProps = {
		spacing: 'medium',
		title: title,
		label: label,
		content: content,
		heading: heading,
	}

	let textBlockB = {
		spacing: 'medium',
		title: subtitle,
		content: subcontent,
		heading: 'h3',
		as: 'h3',
	}

	const partnersLocal = []

	partners.data.forEach((element) => {
		partnersLocal.push(element.attributes)
	})

	return (
		<>
			<BlockWrapper id={id} anchor={anchor} decoration={decoration}>
				<PartialTextBlock {...textBlockProps} />
				<div className={styles.images}>
					<SharedPartialManager partials={partnersLocal} />
				</div>
				<PartialTextBlock {...textBlockB} />
				<div className={styles.lower}>
					<div className={imageClass}>
						{image && (
							<Image
								src={imageURL}
								layout={'fill'}
								onLoadingComplete={() => {
									setImageLoaded(true)
								}}
							/>
						)}
					</div>
					<div className={styles.list}>
						{listTitle && <div className={styles.listtitle}>{listTitle}</div>}
						<ul>{list && <SharedPartialManager partials={list} />}</ul>
						<div className={styles.ctawrapper}>
							{cta.label && <PartialButton {...cta} />}
						</div>
					</div>
				</div>
			</BlockWrapper>
		</>
	)
}
