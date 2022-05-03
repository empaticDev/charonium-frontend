import classNames from 'classnames/bind'
import styles from './partners.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

import { SharedPartialManager } from '@components/shared'

import { PartialHeading, PartialButton } from '@components/partial'

let cx = classNames.bind(styles)

export default function Partners({
	label,
	title,
	content,
	heading,
	partners,
	subtitle,
	subcontent,
	listTitle,
	list,
	cta,
}) {
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

	let textBlockB = {
		spacing: 'medium',
		title: subtitle,
		content: subcontent,
		heading: 'h3',
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
				<PartialTextBlock {...textBlockProps} />
				<div className={styles.images}>
					<SharedPartialManager partials={partnersLocal} />
				</div>
				<PartialTextBlock {...textBlockB} />
				<div className={styles.lower}>
					<div className={styles.placeholder}>image</div>
					<div className={styles.list}>
						<div className={styles.listtitle}>{listTitle}</div>
						<SharedPartialManager partials={list} />
						<div className={styles.ctawrapper}>
							<PartialButton label={cta.label} />
						</div>
					</div>
				</div>
			</BlockWrapper>
		</>
	)
}
