import classNames from 'classnames/bind'
import styles from './style.module.scss'
import Image from 'next/image'
import { BlockWrapper } from '@components/block'

let cx = classNames.bind(styles)

export default function TextMedia({ title, content }) {
	let className = cx({
		'text-media': true,
	})

	return (
		<BlockWrapper className={className}>
			<div className={className}>
				{title && <h2>{title}</h2>}

				{content}
			</div>
		</BlockWrapper>
	)
}
