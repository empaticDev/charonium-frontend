import classNames from 'classnames/bind'
import styles from './style.module.scss'

let cx = classNames.bind(styles)

export default function BlockWrapper({ children }) {
	let className = cx({
		block: true,
	})
	return <div className={className}>{children}</div>
}
