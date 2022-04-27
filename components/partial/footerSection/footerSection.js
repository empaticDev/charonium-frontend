import classNames from 'classnames/bind'
import styles from './footerSection.module.scss'

import { PartialHeading } from '@components/partial'

let cx = classNames.bind(styles)

export default function footerSection({ title, description, alternate }) {
	let className = cx({
		footersection: true,
		footer__alternate: alternate,
	})

	return <PartialHeading title={title} label={description} heading="h3" />
}
