import classNames from 'classnames/bind'
import Image from 'next/image'
import { useState } from 'react'

import styles from './multiTextMedia.module.scss'
import { BlockWrapper } from '@components/block'
import { PartialTextBlock, PartialHeading } from '@components/partial'

let cx = classNames.bind(styles)

export default function MultiTextMedia({
	id,
	anchor,
	label,
	textblocks,
	hstyle,
	ctas,
	align,
	image,
}) {
	let className = cx({
		multiTextMedia: true,
		'content-left': align === 'left' ? true : false,
	})

	const [imageLoaded, setImageLoaded] = useState(false)

	let imageURL = ''

	if (image.data != null) {
		imageURL = image.data.attributes.url
	}

	let imageClass = cx({
		imagewrapper: true,
		notloaded: !imageLoaded,
		loaded: imageLoaded,
	})

	return (
		<BlockWrapper className={className} id={id} anchor={anchor}>
			<div className={className}>
				<div className={imageClass}>
					<Image
						src={imageURL}
						layout={'fill'}
						objectFit={'contain'}
						onLoadingComplete={() => {
							setImageLoaded(true)
						}}
					/>
				</div>
				<div>
					<PartialHeading label={label} />
					<div className={styles.content}>
						{textblocks.map(({ title, text }) => (
							<div key={title}>
								<PartialTextBlock
									title={title}
									content={text}
									heading={hstyle}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
