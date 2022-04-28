import classNames from 'classnames/bind'
import styles from './team.module.scss'

import { BlockTextMedia, BlockWrapper } from '@components/block'

import { SharedBlockManager } from '@components/shared'

let cx = classNames.bind(styles)

export default function Team({ title, description }) {
	let className = cx({
		team: true,
	})

	return (
		<div className={className}>
			<div className={styles.spacing}></div>
			<div className={styles.box}></div>
			<div className={styles.inner}>
				<BlockTextMedia
					title={title}
					content={description}
					alignment="left"
					heading="h1"
					noimage="true"
				/>
				<BlockWrapper>
					team members
					{/* <SharedBlockManager blocks={''} /> */}
				</BlockWrapper>
			</div>
		</div>
	)
}
