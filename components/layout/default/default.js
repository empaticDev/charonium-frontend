import classNames from 'classnames/bind'
import styles from './style.module.scss'

let cx = classNames.bind(styles)

export default function Layout({ children }) {
	let className = cx({
		main: true,
	})

	return <main className={className}>{children}</main>
}
