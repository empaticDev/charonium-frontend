import classNames from 'classnames/bind'
import styles from './footer.module.scss'
import Image from 'next/image'

import { BlockWrapper } from '@components/block'
import { SharedBlockManager } from '@components/shared'
import { PartialFooterSection } from '@components/partial'

let cx = classNames.bind(styles)

export default function Footer({ blocks, alternate }) {
	let className = cx({
		footer: true,
		footer__alternate: alternate,
	})

	return (
		<>
			<div className={styles.graphic}>graphic</div>
			<footer className={className}>
				<BlockWrapper>
					{/* {console.log('footerInner:', socialSection)} */}
					{/* <SharedBlockManager blocks={blocks} /> */}
					<div className={styles.inner}>
						<PartialFooterSection
							title={'Join the Community'}
							description={'Stay up to date and learn more about our products.'}
						/>
						<PartialFooterSection
							title={'Get the latest news'}
							description={'Subscribe to our newsletter'}
						/>
						<PartialFooterSection
							title={'About us'}
							description={
								'Mit dem Charonium Obolus bleibt dir die Unterwelt nicht länger verwehrt. In der Welt des Hades bleibt dir sicher kein Wunsch offen. Wie auch in den alten Geschichten '
							}
						/>
						<PartialFooterSection
							title={'Downloads'}
							description={'Get all information you will need in one file.'}
						/>
					</div>
				</BlockWrapper>
			</footer>
		</>
	)
}
