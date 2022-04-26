import classNames from 'classnames/bind'
import styles from './style.module.scss'

export default function Event({ date, events }) {
	let cx = classNames.bind(styles)

	let className = cx({
		event: true,
	})

	return (
		<div className={className}>
			<span className={styles.dot}></span>
			<h3>{date}</h3>
			<ol>
				{events.map((event) => (
					<li>{event}</li>
				))}
			</ol>
		</div>
	)
}
