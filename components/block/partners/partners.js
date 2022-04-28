import classNames from 'classnames/bind'
import styles from './partners.module.scss'

import { BlockTextMedia, BlockWrapper } from '@components/block'

import { SharedBlockManager } from '@components/shared'

import { PartialHeading, PartialPartner } from '@components/partial'

let cx = classNames.bind(styles)

export default function Partners({ label, title, description, partners }) {
	let className = cx({
		partners: true,
	})

	console.log('partners:', partners)

	const partnersLocal = [
		partners.data[0].attributes,
		partners.data[1].attributes,
		partners.data[2].attributes,
		partners.data[3].attributes,
		partners.data[4].attributes,
	]

	return (
		<>
			<BlockWrapper>
				<PartialHeading title={title} label={label} heading="h2" />
				<p className={styles.description}>{description}</p>
				<div className={styles.images}>
					<SharedBlockManager blocks={partnersLocal} />
				</div>
				<PartialHeading title={'Become a Partner'} heading="h3" />
				<p className={styles.description}>
					{
						'Our valuable partner network enables our users to quickly find a place to store their fragments in convenient locations near them. As a partner, you get special access. And here are the usps.'
					}
				</p>
			</BlockWrapper>
		</>
	)
}
