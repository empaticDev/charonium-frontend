import classNames from 'classnames/bind'
import styles from './team.module.scss'

import { BlockTextMedia, BlockWrapper } from '@components/block'

import { SharedBlockManager } from '@components/shared'

let cx = classNames.bind(styles)

export default function Team({ title, description, members }) {
	let className = cx({
		team: true,
	})

	const membersLocal = [
		members.data[0].attributes,
		members.data[1].attributes,
		members.data[2].attributes,
	]

	return (
		<div className={className}>
			<div className={styles.spacing}></div>
			<div className={styles.box}></div>
			<div className={styles.inner}>
				<BlockTextMedia
					title={title}
					content={description}
					alignment="left"
					heading="h2"
					noimage="true"
				/>
				<BlockWrapper>
					<div className={styles.content}>
						{console.log('team teammembers:', membersLocal)}
						<SharedBlockManager blocks={membersLocal} />
					</div>
				</BlockWrapper>
			</div>
		</div>
	)
}
