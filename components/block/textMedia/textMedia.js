import classNames from 'classnames/bind'
import Image from 'next/image'

import styles from './style.module.scss'
import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

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
	noimage,
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

	// todo image data from api + add to api
	// if (image.data != null) {
	// 	imageURL = image.data.attributes.url
	// }

	return (
		<BlockWrapper
			className={className}
			id={id}
			anchor={anchor}
			decoration={decoration}>
			<div className={className}>
				<div>{noimage ? '' : 'image'}</div>
				<PartialTextBlock {...textMediaProps} />
			</div>
		</BlockWrapper>
	)
}
