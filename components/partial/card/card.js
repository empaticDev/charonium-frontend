import classNames from 'classnames/bind'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './card.module.scss'

export default function Card({title, content}) {

    let cx = classNames.bind(styles)

	let className = cx({
		'card': true,
	})

	return (
		<div className={className}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>
                <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
            </div> 
        </div>
	)
}
