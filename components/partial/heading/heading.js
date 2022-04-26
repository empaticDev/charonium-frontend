import classNames from 'classnames/bind'
import styles from './heading.module.scss'

let cx = classNames.bind(styles)

export default function Heading({ pretitle, title, size }) {
	let className = cx({
		heading: true,
		size: size,
	})

	return (
		<div className={className}>
			{pretitle && <p className={styles.caption}>{pretitle}</p>}
			{title ?? <div className={styles.size}>{title}</div>}
		</div>
	)
}
