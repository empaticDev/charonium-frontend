import classNames from 'classnames/bind'
import styles from './cards.module.scss'
import { BlockWrapper } from '@components/block'
import { SharedPartialManager } from '@components/shared'

export default function Cards({ cards, decoration }) {
	let cx = classNames.bind(styles)

	let className = cx({
		cards: true,
	})

	return (
		<BlockWrapper decoration={decoration}>
			<div className={className}>
				{cards && <SharedPartialManager partials={cards} />}
			</div>
		</BlockWrapper>
	)
}
