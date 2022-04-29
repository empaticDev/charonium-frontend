import classNames from 'classnames/bind'
import styles from './teamMember.module.scss'
import Image from 'next/image'

let cx = classNames.bind(styles)

export default function TeamMember({
	Name,
	Nickname,
	image,
	avatar,
	interest,
	position,
}) {
	let className = cx({
		teammember: true,
	})

	const avatarURL = avatar.data.attributes.url
	const imageURL = image.data.attributes.url

	return (
		<>
			<div className={className}>
				<div className={styles.avatarwrapper}>
					<Image src={avatarURL} width={'357'} height={'500'} />
				</div>
				<div className={styles.description}>
					<div className={styles.imagewrapper}>
						<Image src={imageURL} layout={'fill'} />
					</div>
					<div className={styles.info}>
						<div className={styles.name}>{Nickname}</div>
						<p className={styles.text}>{interest}</p>
						<p className={styles.text}>{position}</p>
					</div>
				</div>
			</div>
		</>
	)
}
