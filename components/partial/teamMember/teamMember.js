import classNames from 'classnames/bind'
import styles from './teammodule.module.scss'

let cx = classNames.bind(styles)

export default function TeamMember({ title, description }) {
	let className = cx({
		teammember: true,
	})

	return (
		<>
			<div className={className}>name avatar image</div>
		</>
	)
}
