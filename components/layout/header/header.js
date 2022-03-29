import classNames from 'classnames/bind'
import styles from './header.module.scss'

let cx = classNames.bind(styles)

export default function Header(props) {
	let className = cx({
		header: true,
		header__alternate: props.alternate,
	})

	return (
		<div className={className}>
			<span className={styles.title}>here comes the header - nice</span>
		</div>
	)
}
