import classNames from 'classnames/bind'
import styles from './listItem.module.scss'

let cx = classNames.bind(styles)

export default function ListItem({ content }) {
	let className = cx({
		listItem: true,
	})

	return (
		<div className={className}>
			<div className={styles.marker}></div>
			<p>{content}</p>
		</div>
	)
}
