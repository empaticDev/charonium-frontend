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

	let footerBlocks = props.footer?.footerBlocks
	let menu = props.footer ? props.footer.menu : null
	let about = props.aboutUs ? props.aboutUs : null

	return (
		<>
			<footer className={className}>
				<div className={styles.graphic}>
					<div className={styles.curve1}></div>
					<div className={styles.curve2}></div>
				</div>
				<div className={styles.inner}>
					<div className={styles.sections}>
						{footerBlocks && <SharedPartialManager partials={footerBlocks} />}
						{about && <PartialFooterSection header={about} />}
					</div>
				</div>
				{menu && (
					<div className={styles.menu}>
						{menu.pages.map((item) => (
							<NextLink
								href={`/${item.page.data.attributes.slug}`}
								key={item.text}>
								<a>{item.text}</a>
							</NextLink>
						))}
					</div>
				)}
			</footer>
		</>
	)
}
