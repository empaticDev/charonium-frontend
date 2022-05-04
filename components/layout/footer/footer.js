import classNames from 'classnames/bind'
import styles from './footer.module.scss'
import NextLink from 'next/link'

import { BlockWrapper } from '@components/block'
import { SharedPartialManager } from '@components/shared'

import { PartialFooterSection } from '@components/partial'

let cx = classNames.bind(styles)

export default function Footer({ ...props }) {
	let className = cx({
		footer: true,
		// footer__alternate: props.footer.alternate,
	})

	let footerBlocks = props.footer.footerBlocks
	let menu = props.footer.menu
	let about = props.aboutUs

	return (
		<>
			<footer className={className}>
				<div className={styles.graphic}>
					<div className={styles.spacing}></div>
					<div className={styles.curve1}></div>
					<div className={styles.curve2}></div>
				</div>
				<div className={styles.inner}>
					<div className={styles.sections}>
						<SharedPartialManager partials={footerBlocks} />
						<PartialFooterSection header={about} />
					</div>
				</div>
				<div className={styles.menu}>
					{menu.pages.map((item) => (
						<NextLink
							href={`/${item.page.data.attributes.slug}`}
							key={item.text}>
							<a>{item.text}</a>
						</NextLink>
					))}
				</div>
			</footer>
		</>
	)
}
