import classNames from 'classnames/bind'
import styles from './timeline.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialTimeline, PartialTextBlock } from '@components/partial'

export default function Timeline({ title,label, content, heading,ctas, dates }) {
	let cx = classNames.bind(styles)

	let className = cx({
		timeline: true,
	})

	let textBlockProps = {
		spacing: 'medium',
		title: title,
		label: label,
		content: content,
		heading: heading,
		ctas: ctas
	}

	return (
		<BlockWrapper className={className}>
			<PartialTextBlock {...textBlockProps}/>
			{dates && <PartialTimeline dates={dates} />}
		</BlockWrapper>
	)
}
