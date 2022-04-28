import classNames from 'classnames/bind'
import styles from './block.module.scss'

let cx = classNames.bind(styles)

export default function BlockWrapper({ children, spacing }) {
	let className = cx({
		block: true,
		'spacing--small': spacing != undefined && spacing === 'small' ? true : false,
		'spacing--none': spacing != undefined && spacing === 'none' ? true : false,
	})

	return (
		<div className={className}>
			<div className={styles.block__inner}>
				{children}
			</div>		
		</div>
	)
}
