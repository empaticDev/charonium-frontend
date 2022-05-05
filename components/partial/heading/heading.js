import classNames from 'classnames/bind'
import styles from './heading.module.scss'

let cx = classNames.bind(styles)

export default function Heading({ label, title, heading, as }) {

	heading = heading ? heading : 'h2'

	let className = cx({
		footer: heading === 'footer' ? true : false,
	})

	let classHeading = cx({
		title: true,
		h1: heading === 'h1' ? true : false,
		h2: heading === 'h2' ? true : false,
		h3: heading === 'h3' ? true : false,
	})

	const H = as ? as : 'h2'

	return (
		<div className={className}>
			{label && <p className={styles.caption}>{label}</p>}
			{title && <H className={classHeading}>{title}</H>}
		</div>
	)
}
