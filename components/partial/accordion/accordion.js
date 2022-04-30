import classNames from 'classnames/bind'
import styles from './accordion.module.scss'

export default function Accordion({title, content}) {
	let cx = classNames.bind(styles)

	let className = cx({
		accordion: true,
	})

	return (
		<div className={className}>
			{title}
            {content}
		</div>
	)
}