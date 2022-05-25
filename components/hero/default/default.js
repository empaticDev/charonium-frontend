import classNames from 'classnames/bind'
import Image from 'next/image'

import styles from './default.module.scss'
import { HeroWrapper } from '@components/hero'
import { PartialTextBlock } from '@components/partial'

let cx = classNames.bind(styles)

export default function Default({ textBlock, content, ctas, image }) {
	let className = cx({
		default: true,
	})

	let textMediaProps = {
		title: textBlock.title,
		label: textBlock.label,
		heading: textBlock.heading,
		as: 'h1',
		content: content,
		ctas: ctas,
	}

	// todo preload image: <Image priority={true} />

	return (
		<HeroWrapper>
			<div className={className}>
				<div className={styles.imagewrapper}>
					<div className={styles.graphic}>
						<div className={styles.curve1}></div>
						<div className={styles.curve2}></div>
					</div>
					<div className={styles.image}>{image ? '' : ''}</div>
				</div>
				<div className={styles.content}>
					<PartialTextBlock {...textMediaProps} />
				</div>
			</div>
		</HeroWrapper>
	)
}
