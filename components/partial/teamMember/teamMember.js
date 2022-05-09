import classNames from 'classnames/bind'
import styles from './teamMember.module.scss'
import Image from 'next/image'

import { useState } from 'react'

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

	const [avatarLoaded, setAvatarLoaded] = useState(false)
	const [imageLoaded, setImageLoaded] = useState(false)

	let avatarClass = cx({
		avatarWrapper: true,
		notloaded: !avatarLoaded,
		loaded: avatarLoaded,
	})

	let imageClass = cx({
		imagewrapper: true,
		notloaded: !imageLoaded,
		loaded: imageLoaded,
	})

	const handleAvatarLoad = (event) => {
		const target = event.target

		if (target.src.indexOf('data:image/gif;base64') < 0) {
			setAvatarLoaded(true)
		}
	}

	const handleImageLoad = (event) => {
		const target = event.target

		if (target.src.indexOf('data:image/gif;base64') < 0) {
			setImageLoaded(true)
		}
	}

	const avatarURL = avatar.data.attributes.url
	const imageURL = image.data.attributes.url

	return (
		<>
			<div className={className}>
				<div className={styles.graphic}>
					<div className={styles.spacing}></div>
					<div className={styles.box}></div>
				</div>
				{avatar && (
					<div className={avatarClass}>
						<Image
							className={styles.avatar}
							src={avatarURL}
							layout="fill"
							onLoad={(event) => {
								const target = event.target
								if (target.src.indexOf('data:image/gif;base64') < 0) {
									setAvatarLoaded(true)
								}
							}}
						/>
					</div>
				)}
				<div className={styles.description}>
					{image && (
						<div className={imageClass}>
							<Image
								className={styles.image}
								src={imageURL}
								layout="fill"
								onLoad={(event) => {
									const target = event.target
									if (target.src.indexOf('data:image/gif;base64') < 0) {
										setImageLoaded(true)
									}
								}}
							/>
						</div>
					)}
					<div className={styles.info}>
						<div className={styles.name}>{Nickname}</div>
						{interest && <p className={styles.text}>{interest}</p>}
						<p className={styles.text}>{position}</p>
					</div>
				</div>
			</div>
		</>
	)
}
