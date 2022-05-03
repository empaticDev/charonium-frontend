import classNames from 'classnames/bind'
import styles from './footer.module.scss'

import { BlockWrapper } from '@components/block'
import { SharedPartialManager } from '@components/shared'

import { PartialFooterSection } from '@components/partial'

let cx = classNames.bind(styles)

export default function Footer({ ...props }) {
	let className = cx({
		footer: true,
		footer__alternate: props.footer.alternate,
	})

	let footerBlocks = props.footer.footerBlocks
	let menu = props.footer.menu
	let about = props.aboutUs

	return (
		<>
			<div className={styles.graphic}>
				<div className={styles.spacing}></div>
				<div className={styles.curve1}></div>
				<div className={styles.curve2}></div>
			</div>
			<footer className={className}>
				<BlockWrapper>
					<div className={styles.inner}>
						<SharedPartialManager partials={footerBlocks} />
						<div className={styles.about}>
							<PartialFooterSection header={about} />
						</div>
					</div>
				</BlockWrapper>
				<div className={styles.menu}>
					{menu.pages.map((item) => (
						<a key={item.text} href={item.link}>
							{item.text}
						</a>
					))}
				</div>
			</footer>
		</>
	)
}
