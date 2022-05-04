import classNames from 'classnames/bind'
import styles from './faq.module.scss'

import { BlockWrapper } from '@components/block'
import { SharedPartialManager } from '@components/shared'
import { PartialTextBlock } from '@components/partial'

let cx = classNames.bind(styles)

export default function Faq({
	title,
	label,
	content,
	heading,
	ctas,
	accordion,
}) {
	let className = cx({
		faq: true,
	})

	let textBlockProps = {
		spacing: 'medium',
		title: title,
		label: label,
		content: content,
		heading: heading,
		ctas: ctas,
	}

	//console.log('accordion', accordion)

	return (
		<BlockWrapper className={className} spacing={'small'}>
			<PartialTextBlock {...textBlockProps} />
			{accordion && <SharedPartialManager partials={accordion} />}
		</BlockWrapper>
	)
}
