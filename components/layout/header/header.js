import classNames from 'classnames/bind'
import styles from './header.module.scss'
import Logo from './assets/logo.svg'
import { PartialButton } from '@components/partial'

let cx = classNames.bind(styles)

export default function Header(props) {
	let className = cx({
		header: true,
		header__alternate: props.alternate,
	})

	return (
		<header className={className}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.menu}>
				<nav className={styles.mainnav}>
					<ul className={styles.navelements}>
						<li><a>Social</a></li>
						<li><a>Services</a></li>
						<li><a>Partner</a></li>
						<li><a>Market</a></li>
					</ul>
				</nav>
				<PartialButton
					label={'Wallet verbinden'}
					secondary={true}
					type={'external'}
					href={'https://charonium.com'}
				/>
			</div>
			<div className={styles.menu__backdrop}></div>
			<button className={styles.menu__button}>Menu</button>
		</header>
	)
}
