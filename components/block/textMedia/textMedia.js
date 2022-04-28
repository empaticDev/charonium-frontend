import classNames from 'classnames/bind'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import Image from 'next/image'

import styles from './style.module.scss'
import { BlockWrapper } from '@components/block'
import { SharedBlockManager } from '@components/shared'

import { PartialHeading } from '@components/partial'

let cx = classNames.bind(styles)

export default function TextMedia({
	title,
	label,
	content,
	ctas,
	alignment,
	heading,
}) {
	let className = cx({
		textMedia: true,
		'content-left': alignment === 'left' ? true : false,
	})

	const hasLink = ctas != null ? true : false

	return (
		<BlockWrapper className={className}>
			<div className={className}>
				<div>image</div>
				<div>
					<PartialHeading title={title} label={label} heading={heading} />
					<div className={styles.content}>
						<ReactMarkdown
							children={content}
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
					<div className={styles.footer}>
						{hasLink && <SharedBlockManager blocks={ctas} />}
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
