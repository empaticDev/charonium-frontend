import classNames from 'classnames/bind'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './card.module.scss'
import Image from 'next/image'
import { useState } from 'react'

export default function Card({ title, content, image, as }) {
	let cx = classNames.bind(styles)
	const [imageLoaded, setImageLoaded] = useState(false)

	let className = cx({
		card: true,
	})

	let imageURL = ''

	if (image.data != null) {
		imageURL = image.data.attributes.url
	}

	const Title = as != undefined ? as : 'p'

	let imageClass = cx({
		image: true,
		notloaded: !imageLoaded,
		loaded: imageLoaded,
	})

	return (
		<div className={className}>
			<div className={imageClass}>
				{image.data && (
					<Image
						className={styles.cardimage}
						src={imageURL}
						width={117}
						height={117}
						onLoad={(event) => {
							const target = event.target

							// next/image use an 1x1 px git as placeholder. We only want the onLoad event on the actual image
							if (target.src.indexOf('data:image/gif;base64') < 0) {
								setImageLoaded(true)
							}
						}}
					/>
				)}
			</div>
			{title && <Title className={styles.title}>{title}</Title>}
			<div className={styles.content}>
				{content && (
					<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
				)}
			</div>
		</div>
	)
}
