import classNames from 'classnames/bind'
import styles from './timeline.module.scss'

import { SharedPartialManager } from '@components/shared'
import { PartialTimelineDot } from '@components/partial'

export default function Timeline({ dates }) {
	let cx = classNames.bind(styles)

	let className = cx({
		timeline: true,
	})

	return (
		<div className={className}>
			<ol className={styles.list}>
				{dates && dates.map((item) => (
                	<PartialTimelineDot key={item.id} {...item} />
				))}
			</ol>
		</div>
	)
}
