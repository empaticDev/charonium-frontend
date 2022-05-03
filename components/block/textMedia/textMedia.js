import classNames from 'classnames/bind'
import Image from 'next/image'

import styles from './style.module.scss'
import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

let cx = classNames.bind(styles)

export default function TextMedia({
	title,
	label,
	content,
	heading,
	ctas,
	alignment,
	image,
	noimage,
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
		<BlockWrapper className={className}>
			<div className={className}>
				<div>{noimage ? '' : 'image'}</div>
				<PartialTextBlock {...textMediaProps} />
			</div>
		</BlockWrapper>
	)
}
