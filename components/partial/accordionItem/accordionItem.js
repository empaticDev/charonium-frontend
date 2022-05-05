import classNames from 'classnames/bind'
import styles from './accordionItem.module.scss'
import FeatherIcon from 'feather-icons-react'

import { useState } from 'react'

export default function AccordionItem({ title, content }) {
	let cx = classNames.bind(styles)

	const [expanded, setExpanded] = useState(false)
	const [hiding, setHiding] = useState(false)

	function toggle() {
		if (expanded) {
			setHiding(!hiding)
			setTimeout(() => setExpanded(!expanded), 100)
		} else {
			setExpanded(!expanded)
			setTimeout(() => setHiding(!hiding), 100)
		}
	}

	let contentClass = cx({
		content: true,
		show: expanded,
		hide: !expanded,
		hiding: hiding,
	})

	let titleClass = cx({
		title: true,
		expanded: expanded,
		collapsed: !expanded,
	})

	return (
		<div className={styles.item}>
			<button className={titleClass} onClick={toggle}>
				{title}
				<div className={styles.icon}>
					<FeatherIcon icon={'chevron-down'} />
				</div>
			</button>

			<div className={contentClass}>
				<div className={styles.inner}>
					{content && <p>{content}</p>}
				</div>
			</div>
		</div>
	)
}
