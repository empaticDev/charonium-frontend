import classNames from 'classnames/bind'
import styles from './cards.module.scss'
import { BlockWrapper } from '@components/block'
import { SharedBlockManager } from '@components/shared'

export default function Cards({ cards }) {
	let cx = classNames.bind(styles)

	let className = cx({
		cards: true,
	})

	return (
		<BlockWrapper className={className} spacing="none">
			<div className={className}>
				{cards && <SharedBlockManager blocks={cards} />}
			</div>
		</BlockWrapper>
	)
}
