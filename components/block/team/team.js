import classNames from 'classnames/bind'
import styles from './team.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

import { SharedPartialManager } from '@components/shared'

let cx = classNames.bind(styles)

export default function Team({
	id,
	anchor,
	title,
	label,
	content,
	heading,
	ctas,
	members,
}) {
	let className = cx({
		team: true,
	})

	let textBlockProps = {
		spacing: 'medium',
		title: title,
		label: label,
		content: content,
		heading: heading,
		ctas: ctas,
	}

	const membersLocal = []

	members.data.forEach((element) => {
		membersLocal.push(element.attributes)
	})

	return (
		<BlockWrapper id={id} anchor={anchor}>
			<div className={className}>
				<div className={styles.graphic}>
					<div className={styles.spacing}></div>
					<div className={styles.box}></div>
				</div>
				<div className={styles.inner}>
					<PartialTextBlock {...textBlockProps} />

					<div className={styles.content}>
						<SharedPartialManager partials={membersLocal} />
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
