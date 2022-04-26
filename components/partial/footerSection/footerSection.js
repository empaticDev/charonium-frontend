import classNames from 'classnames/bind'
import styles from './footer.module.scss'

let cx = classNames.bind(styles)

export default function Footer({ title, description }) {
	let className = cx({
		footersection: true,
	})

	return (
		<div className={className}>
			<div className={styles.heading}></div>
			<div className={styles.description}>{description}</div>
		</div>
	)
}
