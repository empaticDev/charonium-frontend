import classNames from 'classnames/bind'
import styles from './teamMember.module.scss'

let cx = classNames.bind(styles)

export default function TeamMember({ Name, Nickname, image, avatar }) {
	let className = cx({
		teammember: true,
	})

	console.log('member:', Name)

	return (
		<>
			<div className={className}>
				<div className={styles.name}>{Nickname}</div>
			</div>
		</>
	)
}
