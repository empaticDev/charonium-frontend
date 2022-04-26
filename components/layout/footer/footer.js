import classNames from 'classnames/bind'
import styles from './footer.module.scss'
import Image from 'next/image'

import { BlockWrapper } from '@components/block'

import FooterSection from '@components/partial'

let cx = classNames.bind(styles)

let Section = () => {
	return (
		<div className={styles.section}>
			<h3>title</h3>
			<p>desc</p>
		</div>
	)
}

export default function Footer({ socialtitle, sociallinks, newslettertitle }) {
	let className = cx({
		footer: true,
	})

	return (
		<footer className={className}>
			<div className={styles.footer__inner}>
				<Section />
				<Section />
				<Section />
				<Section />
			</div>
		</footer>
	)
}
