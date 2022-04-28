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
			<div className={styles.navwrapper}>
				<div className={styles.mainnav}>
					<div className={styles.logo}>
						<Logo />
					</div>
					<div className={styles.navelements}>
						<a>Social</a>
						<a>Services</a>
						<a>Partner</a>
						<a>Market</a>
					</div>
				</div>
				<PartialButton
					label={'Wallet verbinden'}
					secondary={true}
					type={'external'}
					href={'https://charonium.com'}
				/>
			</div>
		</header>
	)
}
