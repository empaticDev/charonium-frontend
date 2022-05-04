import classNames from 'classnames/bind'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import styles from './textblock.module.scss'

import { SharedPartialManager } from '@components/shared'
import { PartialHeading } from '@components/partial'

export default function TextBlock(props) {
	let cx = classNames.bind(styles)

	let className = cx({
		textBlock: true,
		'spacing--medium':
			props.spacing != undefined && props.spacing === 'medium' ? true : false,
	})

	const hasLink = props.ctas != null ? true : false

	return (
		<div className={className}>
			{props.title && (
				<PartialHeading
					title={props.title}
					label={props.label}
					heading={props.heading}
				/>
			)}
			{props.content && (
				<div className={styles.content}>
					<ReactMarkdown
						children={props.content}
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
			)}
			{hasLink && (
				<div className={styles.footer}>
					<SharedPartialManager partials={props.ctas} />
				</div>
			)}
		</div>
	)
}
