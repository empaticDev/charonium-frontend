import classNames from 'classnames/bind'
import styles from './heading.module.scss'

let cx = classNames.bind(styles)

const heading = ({ pretitle, title, size }) => {
	let className = cx({
		heading: true,
	})

	return (
		<div className={className}>
			{pretitle && <p className={styles.caption}>{pretitle}</p>}
			{title ?? <div className={styles.size}>{title}</div>}
		</div>
	)
}

export default heading
