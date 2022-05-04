import classNames from 'classnames/bind'
import styles from './partner.module.scss'
import Image from 'next/image'

let cx = classNames.bind(styles)

export default function Partner({ name, link, logo }) {
	let className = cx({
		partner: true,
	})

	const logoURL = logo.data && logo.data.attributes.url
	const logoW = logo.data && logo.data.attributes.width
	const logoH = logo.data && logo.data.attributes.height

	return (
		<>
			{logo && (
				<div className={className}>
					<div className={styles.image}>
						<a href={link}>
							<Image
								src={logoURL}
								layout="responsive"
								width={logoW}
								height={logoH}
							/>
						</a>
					</div>
				</div>
			)}
		</>
	)
}
