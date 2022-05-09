import classNames from 'classnames/bind'
import styles from './header.module.scss'
import Logo from './assets/logo.svg'
import { PartialNavAnchor, PartialButton } from '@components/partial'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

let cx = classNames.bind(styles)

export default function Header({ ...props }) {
	const toggleBtnLabel = 'Menu'
	const toggleBtnLabelActive = 'Close'
	const [hambugerOpen, setHamburgerOpen] = useState(false)
	const [hamburgerLabel, setHamburgerLabel] = useState(toggleBtnLabel)

	const blocks = props?.page?.attributes.blocks
	const anchorItems = blocks?.filter((block) => block.anchor)

	const router = useRouter()

	function toggleMenu(e) {
		e.preventDefault()
		setHamburgerOpen(!hambugerOpen)
	}

	useEffect(() => {
		// Set text on menu toggle button
		if (hambugerOpen) {
			setHamburgerLabel(toggleBtnLabelActive)
		} else {
			setHamburgerLabel(toggleBtnLabel)
		}

		const handleRouteChange = (url, { shallow }) => {
			setHamburgerOpen(!hambugerOpen)
		}

		router.events.on('hashChangeStart', handleRouteChange)
	}, [])

	let className = cx({
		header: true,
		'header--alternate': props.alternate,
		'header--open': hambugerOpen,
	})

	return (
		<header className={className}>
			<div className={styles.logo}>
				<Link href={'/'}>
					<a>
						<Logo />
					</a>
				</Link>
			</div>
			<div className={styles.menu}>
				<PartialNavAnchor
					className={styles.mainnav}
					anchorItems={anchorItems}
				/>
				<PartialButton
					label={'Wallet verbinden'}
					secondary={true}
					type={'external'}
					href={'https://charonium.com'}
				/>
			</div>
			<div className={styles.menu__backdrop} onClick={toggleMenu}></div>
			<button className={styles.menu__button} onClick={toggleMenu}>
				{hamburgerLabel}
			</button>
		</header>
	)
}
