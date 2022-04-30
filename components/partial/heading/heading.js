import classNames from 'classnames/bind'
import styles from './heading.module.scss'

let cx = classNames.bind(styles)

export default function Heading({ label, title, heading }) {

	heading = heading ? heading : 'h2'

	let className = cx({
		heading: true,
		h1: heading === 'h1' ? true : false,
		h2: heading === 'h2' ? true : false,
		h3: heading === 'h3' ? true : false,
		footer: heading === 'footer' ? true : false,
	})

	return (
		<div className={className}>
			{label && <p className={styles.caption}>{label}</p>}
			{title && <div className={styles.title}>{title}</div>}
		</div>
	)
}
