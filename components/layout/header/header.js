import classNames from 'classnames/bind'
import styles from './header.module.scss'
import Logo from './assets/logo.svg'

let cx = classNames.bind(styles)

export default function Header(props) {
	let className = cx({
		header: true,
		header__alternate: props.alternate,
	})

	return (
		<header className={className}>
			<div className={styles.inner}>
			<div className={styles.logo}>
				<Logo />
			</div>
			
			<span className={styles.title}>here comes the header - nice</span>
			</div>
		</header>
	)
}
