import classNames from 'classnames/bind'
import styles from './faq.module.scss'

import { BlockTextMedia, BlockWrapper } from '@components/block'

import { SharedBlockManager } from '@components/shared'

let cx = classNames.bind(styles)

export default function Faq({ title, description, questions }) {
	let className = cx({
		faq: true,
	})

	return (
		<>
			<BlockTextMedia
				title={title}
				content={description}
				heading="h2"
				noimage="true"
				alignment="left"
			/>
			<BlockWrapper spacing={'small'}>
				<ol className={styles.list}>
					{questions.map((q) => (
						<li>{q.question}</li>
					))}
				</ol>
			</BlockWrapper>
		</>
	)
}
