import classNames from 'classnames/bind'
import styles from './style.module.scss'

import { BlockWrapper } from '@components/block'
import { SharedBlockManager } from '@components/shared'

export default function Timeline({ title, description, dates }) {
	let cx = classNames.bind(styles)

	let className = cx({
		timeline: true,
	})

	return (
		<BlockWrapper className={className}>
			<div className={className}>
				{title}
				{description}
				<SharedBlockManager blocks={dates} />
			</div>
		</BlockWrapper>
	)
}
