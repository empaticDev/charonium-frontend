import classNames from 'classnames/bind'
import styles from './footer.module.scss'
import Image from 'next/image'

import { BlockWrapper } from '@components/block'
import { SharedBlockManager } from '@components/shared'
import { PartialFooterSection } from '@components/partial'

let cx = classNames.bind(styles)

export default function Footer({
	SocialTitle,
	socialLinks,
	newsletterTitle,
	input,
	downloadsTitle,
}) {
	let className = cx({
		footer: true,
	})

	return (
		<footer className={className}>
			<div className={styles.footer__inner}>
				{console.log('footerInner', SocialTitle)}
				{/* <PartialFooterSection
					title={SocialTitle.title}
					description={SocialTitle.description}
				/> */}
				<SharedBlockManager blocks={SocialTitle} />
				<SharedBlockManager blocks={newsletterTitle} />
			</div>
		</footer>
	)
}
