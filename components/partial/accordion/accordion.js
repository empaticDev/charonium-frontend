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

	function toggle() {
		setExpanded(!expanded)
	}

	var contentClass = cx({
		content: true,
		show: expanded,
		hide: !expanded,
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
				{/* <FeatherIcon icon={'chevron-down'} /> */}
			</button>

			<div className={contentClass}>
				<p>{content}</p>
			</div>
		</div>
	)
}
