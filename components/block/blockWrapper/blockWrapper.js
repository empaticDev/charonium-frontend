import classNames from 'classnames/bind'
import styles from './block.module.scss'

let cx = classNames.bind(styles)

export default function BlockWrapper({
	children,
	spacing,
	id,
	anchor,
	fullWidth,
	decoration,
}) {
	let className = cx({
		block: true,
		'spacing--small':
			spacing != undefined && spacing === 'small' ? true : false,
		'spacing--none': spacing != undefined && spacing === 'none' ? true : false,
	})

	let innerClass = cx({
		block__inner: fullWidth != undefined && fullWidth ? false : true,
		top: true,
	})

	let atts = {}
	let linkFormat = ''
	if (anchor) {
		linkFormat = anchor.name.toLowerCase()
		linkFormat = encodeURIComponent(linkFormat).replace(/%20/g, '-')
		linkFormat = `${linkFormat}-${id}`

		atts.id = linkFormat
	}

	let graphicClass = cx({
		graphic: true,
		one: decoration?.one,
		two: decoration?.two,
		three: decoration?.three,
		hide: !decoration,
	})

	return (
		<section {...atts} className={className}>
			<div className={graphicClass}>
				<svg
					width="927"
					height="1185"
					viewBox="0 0 927 1185"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M308.208 541.164C386.966 844.058 630.229 997.271 808.144 1113.56L926.534 1184.73L814.842 1102.42C681.073 1035.42 378.882 798.804 316.451 527.451C238.413 188.26 215.244 141.663 184.306 110.23C159.556 85.0837 149.608 36.7198 35.4305 0.363741C19.4304 16.3638 20.9304 12.8638 0.93047 32.8638C21.3137 53.1425 145.143 94.6698 176.836 122.657C236.427 175.282 265.237 375.902 308.208 541.164Z" />
				</svg>
			</div>
			<div className={innerClass}>{children}</div>
		</section>
	)
}
