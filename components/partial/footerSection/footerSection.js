import classNames from 'classnames/bind'
import styles from './footerSection.module.scss'

import { PartialHeading } from '@components/partial'

let cx = classNames.bind(styles)

export default function footerSection({ header, list, input, downloads }) {
	let className = cx({
		footersection: true,
	})

	console.log('footersection heading: ', header)
	return (
		<div className={className}>
			<PartialHeading title={header.title} heading={'h3'} />
			<p className={styles.description}>{header.description}</p>
			{list ? 'socials list' : ''}
			{input ? input.placeholder : ''}
			{downloads ? 'downloads' : ''}
		</div>
	)
}
