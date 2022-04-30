import classNames from 'classnames/bind'
import styles from './partners.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

import { SharedPartialManager } from '@components/shared'

import { PartialHeading, PartialPartner } from '@components/partial'

let cx = classNames.bind(styles)

export default function Partners({ label, title, content, heading, partners }) {
	let className = cx({
		partners: true,
	})

	let textBlockProps = {
		spacing: 'medium',
		title: title,
		label: label,
		content: content,
		heading: heading,
	}

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
				<PartialTextBlock {...textBlockProps}/>
				<div className={styles.images}>
					<SharedPartialManager partials={partnersLocal} />
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
