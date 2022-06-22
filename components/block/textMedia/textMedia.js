import classNames from 'classnames/bind'
import Image from 'next/image'

import styles from './style.module.scss'
import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'
import { useState } from 'react'

let cx = classNames.bind(styles)

export default function TextMedia({
	id,
	anchor,
	title,
	label,
	content,
	heading,
	ctas,
	alignment,
	image,
	decoration,
}) {
	let className = cx({
		textMedia: true,
		'content-left': alignment === 'left' ? true : false,
	})

	let textMediaProps = {
		title: title,
		label: label,
		content: content,
		heading: heading,
		ctas: ctas,
	}

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

	return (
		<BlockWrapper
			className={className}
			id={id}
			anchor={anchor}
			decoration={decoration}>
			<div className={className}>
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
				<PartialTextBlock {...textMediaProps} />
			</div>
		</BlockWrapper>
	)
}
