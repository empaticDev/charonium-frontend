import classNames from 'classnames/bind'
import styles from './timelineEntry.module.scss'

export default function TimelineEntry({ id, name }) {
	let cx = classNames.bind(styles)

	let className = cx({
		'entry': true,
	})

	return (
		<li className={className}>
			<div className={styles.marker}></div>
			{name}
		</li>
	)
}
