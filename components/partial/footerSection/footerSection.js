import classNames from 'classnames/bind'
import styles from './footerSection.module.scss'
import FeatherIcon from 'feather-icons-react'

import { PartialHeading, PartialNewsletterSubscribe } from '@components/partial'

import { SharedPartialManager } from '@components/shared'

let cx = classNames.bind(styles)

const socialLinks = (list) => {
	return (
		<>
			{list.map((item) => (
				<a href={item.link} target={'__' + item.target} key={item.text}>
					<FeatherIcon
						className={styles.icon}
						icon={
							item.text === 'Discord'
								? 'message-circle'
								: item.text.toLowerCase()
						}
						size="16"
					/>
					{item.text}
				</a>
			))}
		</>
	)
}

export default function footerSection({ header, links, input, downloads }) {
	let className = cx({
		footersection: true,
	})

	return (
		<div className={className}>
			{header && <PartialHeading title={header.title} heading={'footer'} />}
			{header && <p className={styles.description}>{header.description}</p>}
			{links && <div className={styles.links}>{socialLinks(links)}</div>}
			{input && <PartialNewsletterSubscribe />}
			{downloads && <SharedPartialManager partials={downloads} />}
		</div>
	)
}
