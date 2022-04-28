import classNames from 'classnames/bind'
import styles from './footer.module.scss'

import { BlockWrapper } from '@components/block'
import { SharedBlockManager } from '@components/shared'

let cx = classNames.bind(styles)

export default function Footer({ footerBlocks }) {
	let className = cx({
		footer: true,
		// footer__alternate: alternate,
	})

	return (
		<>
			<div className={styles.graphic}>graphic</div>
			<footer className={className}>
				<BlockWrapper>
					{console.log('footerInner:', footerBlocks)}
					<div className={styles.inner}>
						<SharedBlockManager blocks={footerBlocks} />
					</div>
				</BlockWrapper>
			</footer>
		</>
	)
}
