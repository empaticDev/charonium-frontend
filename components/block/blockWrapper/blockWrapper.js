import classNames from 'classnames/bind'
import styles from './block.module.scss'

let cx = classNames.bind(styles)

export default function BlockWrapper({
	children,
	spacing,
	id,
	anchor,
	fullWidth,
}) {
	let className = cx({
		block: true,
		'spacing--small':
			spacing != undefined && spacing === 'small' ? true : false,
		'spacing--none': spacing != undefined && spacing === 'none' ? true : false,
	})

	let innerClass = cx({
		block__inner: fullWidth != undefined && fullWidth ? false : true,
	})

	let atts = {}
	let linkFormat = ''
	if (anchor) {
		linkFormat = anchor.name.toLowerCase()
		linkFormat = encodeURIComponent(linkFormat).replace(/%20/g, '-')
		linkFormat = `${linkFormat}-${id}`

		atts.id = linkFormat
	}

	return (
		<section {...atts} className={className}>
			<div className={innerClass}>{children}</div>
		</section>
	)
}
