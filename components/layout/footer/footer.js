import classNames from 'classnames/bind'
import styles from './footer.module.scss'

import { BlockWrapper } from '@components/block'
import { SharedPartialManager } from '@components/shared'

let cx = classNames.bind(styles)

export default function Footer({ footerBlocks, menu, alternate }) {
	let className = cx({
		footer: true,
		footer__alternate: alternate,
	})

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
					</div>
				</BlockWrapper>
				<div className={styles.menu}>
					{menu.pages.map((item) => (
						<a key={item.text}>{item.text}</a>
					))}
				</div>
			</footer>
		</>
	)
}
