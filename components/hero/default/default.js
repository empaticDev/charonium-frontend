import classNames from 'classnames/bind'
import Image from 'next/image'

import styles from './default.module.scss'
import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

let cx = classNames.bind(styles)

export default function Default({ textBlock, content, ctas, image }) {
	let className = cx({
		default: true,
	})

	let textMediaProps = {
		title: textBlock.title,
		label: textBlock.label,
		heading: textBlock.heading,
		content: content,
		ctas: ctas,
	}

	// todo preload image: <Image priority={true} />

	return (
		<BlockWrapper>
			<div className={className}>
				<div>{image ? '' : 'Hero Default image'}</div>
				<PartialTextBlock {...textMediaProps} />
			</div>
		</BlockWrapper>
	)
}
