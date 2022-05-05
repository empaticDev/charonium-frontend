import classNames from 'classnames/bind'
import styles from './accordion.module.scss'

import { SharedPartialManager } from '@components/shared'
//import { PartialAccordionItem } from '@components/partial'

export default function Accordion({ accordion }) {
	let cx = classNames.bind(styles)

	let className = cx({
		accordion: true,
	})

	return (
		<div className={className}>
			<SharedPartialManager partials={accordion} />
		</div>
	)
}
