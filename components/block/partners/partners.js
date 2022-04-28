import classNames from 'classnames/bind'
import styles from './partners.module.scss'

import { BlockTextMedia, BlockWrapper } from '@components/block'

import { SharedBlockManager } from '@components/shared'

import { PartialHeading } from '@components/partial'

let cx = classNames.bind(styles)

export default function Partners({ label, title, description }) {
	let className = cx({
		partners: true,
	})

	return (
		<>
			<BlockWrapper>
				<PartialHeading title={title} label={label} heading="h2" />
				<p className={styles.content}>{description}</p>
			</BlockWrapper>
		</>
	)
}
