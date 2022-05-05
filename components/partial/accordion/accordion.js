import classNames from 'classnames/bind'
import styles from './accordion.module.scss'
import FeatherIcon from 'feather-icons-react'

import { useState } from 'react'

export default function Accordion({ title, content }) {
	let cx = classNames.bind(styles)

	let className = cx({
		accordion: true,
	})

	const [expanded, setExpanded] = useState(false)
	const [hiding, setHiding] = useState(false)

	function toggle() {
		if (expanded) {
			setHiding(expanded)
			setTimeout(() => setExpanded(!expanded), 150)
		} else {
			setExpanded(!expanded)
			setHiding(expanded)
		}
	}

	var contentClass = cx({
		content: true,
		show: expanded,
		hide: !expanded,
		hiding: hiding,
	})

	var titleClass = cx({
		title: true,
		expanded: expanded,
		collapsed: !expanded,
	})

	return (
		<div className={className}>
			<button className={titleClass} onClick={toggle}>
				{title}
				<div className={styles.icon}>
					<FeatherIcon icon={'chevron-down'} />
				</div>
			</button>

			<div className={contentClass}>{content && <p>{content}</p>}</div>
		</div>
	)
}
