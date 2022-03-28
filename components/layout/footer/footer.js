import classNames from 'classnames/bind'
import styles from './footer.module.scss'

let cx = classNames.bind(styles)

export default function Footer(props) {
	let className = cx({
		wrapper: true,
		wrapper__alternate: props.alternate,
	})

	return (
		<div className={className}>
			<span className={styles.title}>here comes the footer - nice</span>
		</div>
	)
}
