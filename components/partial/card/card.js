import classNames from 'classnames/bind'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './card.module.scss'
import Image from 'next/image'

export default function Card({ title, content, image }) {
	let cx = classNames.bind(styles)

	let className = cx({
		card: true,
	})

	let imageURL = ''

	if (image.data != null) {
		imageURL = image.data.attributes.url
	}

	return (
		<div className={className}>
			<div className={styles.image}>
				{image.data && <Image src={imageURL} width={117} height={117} />}
			</div>
			{title && <h2 className={styles.title}>{title}</h2>}
			<div className={styles.content}>
				{content && (
					<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
				)}
			</div>
		</div>
	)
}
