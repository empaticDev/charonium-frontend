import classNames from 'classnames/bind'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import styles from './text.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialHeading } from '@components/partial'

let cx = classNames.bind(styles)

export default function Text({ title, text }) {
	let className = cx({
		text: true,
	})

	// let textMediaProps = {
	// 	title: title,
	// 	label: label,
	// 	content: content,
	// 	heading: heading,
	// 	ctas: ctas,
	// }

	return (
		<BlockWrapper>
			<div className={className}>
				{title && <PartialHeading title={title} heading={'h2'} />}

				<div className={styles.content}>
					<ReactMarkdown
						children={text}
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[
							rehypeRaw,
							[
								rehypeSanitize,
								{
									tagNames: [
										'p',
										'del',
										'strong',
										'em',
										'a',
										'b',
										'blockquote',
										'ul',
										'ol',
										'li',
										'u',
										'code',
									],
								},
							],
						]}
					/>
				</div>
			</div>
		</BlockWrapper>
	)
}
