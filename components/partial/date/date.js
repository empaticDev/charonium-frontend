import classNames from 'classnames/bind'
import styles from './date.module.scss'

export default function Date({ date, events }) {
	let cx = classNames.bind(styles)

	let className = cx({
		date: true,
	})

	return (
		<div className={className}>
			<div className={styles.list}>
				{events.map((event) => (
					<div className={styles.event}>
						<div className={styles.iconwrapper}>
							<div className={styles.eventdot}></div>
							<div className={styles.eventline}></div>
						</div>
						<div className={styles.eventname}>{event.name}</div>
					</div>
				))}
				<div className={styles.event}>
					<div className={styles.iconwrapper}>
						<div className={styles.eventline}></div>
					</div>
					<div className={styles.eventname}></div>
				</div>
				<div className={styles.event}>
					<div className={styles.iconwrapper}>
						<div className={styles.eventline}></div>
					</div>
					<div className={styles.eventname}></div>
				</div>
			</div>

			<div className={styles.graphic}>
				<div className={styles.dot}></div>
				<div className={styles.line}></div>
			</div>
			<h3 className={styles.title}>{date}</h3>
		</div>
	)
}
