import classNames from 'classnames/bind'
import Image from 'next/image'

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
	noimage,
}) {
	let className = cx({
		multiTextMedia: true,
		'content-left': align === 'left' ? true : false,
	})

	// todo image data from api + add to api
	// if (image.data != null) {
	// 	imageURL = image.data.attributes.url
	// }

	// let textMediaProps = {
	// 	title: title,
	// 	label: label,
	// 	content: content,
	// 	heading: heading,
	// 	ctas: ctas,
	// }

	return (
		<BlockWrapper className={className} id={id} anchor={anchor}>
			{console.log('multi text', hstyle)}
			<div className={className}>
				<div>{noimage ? '' : 'image'}</div>
				<div>
					<PartialHeading label={label} />
					<div className={styles.content}>
						{textblocks.map(({ title, text }) => (
							<PartialTextBlock title={title} content={text} heading={hstyle} />
						))}
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
