import classNames from 'classnames/bind'
import styles from './timeline.module.scss'

import { BlockWrapper } from '@components/block'
import { SharedBlockManager } from '@components/shared'
import { PartialHeading } from '@components/partial'

export default function Timeline({ title, description, dates }) {
	let cx = classNames.bind(styles)

	let className = cx({
		timeline: true,
	})

	return (
		<div className={className}>
			<BlockWrapper>
				<PartialHeading title={title} label={description} heading="h2" />
			</BlockWrapper>
			<div className={styles.content}>
				<SharedBlockManager blocks={dates} />
			</div>
		</div>
	)
}
