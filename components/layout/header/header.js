import classNames from 'classnames/bind'
import styles from './header.module.scss'
import Logo from './assets/logo.svg'
import { PartialButton } from '@components/partial'
import { useState, useEffect } from 'react'

let cx = classNames.bind(styles)

export default function Header(props) {

	const toggleBtnLabel = 'Menu'
	const toggleBtnLabelActive = 'Close'
	const [hambugerOpen, setHamburgerOpen] = useState(false)
	const [hamburgerLabel, setHamburgerLabel] = useState(toggleBtnLabel)

	function toggleMenu(e) {
    	e.preventDefault(); 	
		setHamburgerOpen(!hambugerOpen)
  	}

	useEffect(() => {
		// Set text on menu toggle button 
		if(hambugerOpen) {
			setHamburgerLabel(toggleBtnLabelActive)
		} else {
			setHamburgerLabel(toggleBtnLabel)
		}
	});

	let className = cx({
		header: true,
		'header--alternate': props.alternate,
		'header--open': hambugerOpen
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
			<div className={styles.menu__backdrop} onClick={toggleMenu}></div>
			<button className={styles.menu__button} onClick={toggleMenu}>{hamburgerLabel}</button>
		</header>
	)
}
