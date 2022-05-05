import classNames from 'classnames/bind'
import styles from './hero.module.scss'

let cx = classNames.bind(styles)

export default function BlockWrapper({
	children,
	spacing,
	fullWidth,
}) {
	let className = cx({
		hero: true,
		'spacing--small':
			spacing != undefined && spacing === 'small' ? true : false,
		'spacing--none': spacing != undefined && spacing === 'none' ? true : false,
	})

	let innerClass = cx({
		hero__inner: fullWidth != undefined && fullWidth ? false : true,
	})


	return (
		<div className={className}>
			<div className={innerClass}>{children}</div>
		</div>
	)
}
