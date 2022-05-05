import classNames from 'classnames/bind'
import styles from './partner.module.scss'
import Image from 'next/image'

let cx = classNames.bind(styles)

export default function Partner({ name, link, logo }) {
	let className = cx({
		partner: true,
	})

	const logoURL = logo.data?.attributes.url
	const logoW = logo.data?.attributes.width
	const logoH = logo.data?.attributes.height

	let image 

	if(link != null) {
		image = <a href={link} className={styles.link} target="_blank"><Image src={logoURL} layout="fill"/></a>
	} else {
		image = <Image src={logoURL} layout="fill" />
	}
	return (
		<>
			{logo && (
				<div className={className}>
					<div className={styles.image}>
						{image}
					</div>
				</div>
			)}
		</>
	)
}
