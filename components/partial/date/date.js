import classNames from 'classnames/bind'
import styles from './date.module.scss'

export default function Date({ date, events }) {
	let cx = classNames.bind(styles)

	let className = cx({
		event: true,
	})

	return (
		<div className={className}>
			<ol className={styles.list}>
				{events.map((event) => (
					<li>{event.name}</li>
				))}
			</ol>
			<div className={styles.graphic}>
				<div className={styles.dot}></div>
				<div className={styles.line}></div>
			</div>
			<h3 className={styles.date}>{date}</h3>
		</div>
	)
}
