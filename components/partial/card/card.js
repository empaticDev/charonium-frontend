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

	const imageURL = image.data.attributes.url

	return (
		<div className={className}>
			<div>
				<Image src={imageURL} width={117} height={117} />
			</div>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.content}>
				<ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
			</div>
		</div>
	)
}
