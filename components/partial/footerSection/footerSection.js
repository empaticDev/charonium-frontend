import classNames from 'classnames/bind'
import styles from './footerSection.module.scss'

let cx = classNames.bind(styles)

export default function footerSection({ title, description }) {
	let className = cx({
		footersection: true,
	})

	return (
		<div className={className}>
			<div className={styles.heading}>{title}</div>
			<div className={styles.description}>{description}</div>
		</div>
	)
}
