import classNames from 'classnames/bind'
import styles from './btn.module.scss'
import Link from 'next/link'
import FeatherIcon from 'feather-icons-react'

let cx = classNames.bind(styles)

const getLink = (type, page, href, download) => {
	let link

	switch (type) {
		case 'internal':
			link = `/${page.data.attributes.slug}`
			break
		case 'anchor':
			link = href
			break
		case 'external':
			link = href
			break
		case 'download':
			link = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${download.data.attributes.url}`
			break
		default:
			return
	}

	return link
}

export default function Button({
	label,
	type,
	secondary,
	page,
	href,
	download,
	icon,
}) {
	let className = cx({
		btn: true,
		secondary: secondary,
		icon: icon,
	})

	//const link = type === 'external' && page.data != null || href != null ? href : `/${page.data.attributes.slug}`

	const link = getLink(type, page, href, download)
	const isDownload = type === 'download' && download != null ? true : false

	switch (type) {
		case 'internal':
			return (
				<>
					{icon && (
						<svg
							style={{ width: 0, height: 0, position: 'absolute' }}
							aria-hidden="true"
							focusable="false">
							<linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
								<stop offset="0%" stopColor="#22C1C3" />
								<stop offset="100%" stopColor="#FDBB2D" />
							</linearGradient>
						</svg>
					)}
					<Link href={link}>
						<a className={className}>
							{label}
							{icon && (
								<div className={styles.iconwrapper}>
									<FeatherIcon icon={icon} />
								</div>
							)}
						</a>
					</Link>
				</>
			)
			break
		default:
			return (
				<>
					{icon && (
						<svg
							style={{ width: 0, height: 0, position: 'absolute' }}
							aria-hidden="true"
							focusable="false">
							<linearGradient id="gradient" x1="0" x2="1" y1="1" y2="0">
								<stop offset="0%" stopColor="#22C1C3" />
								<stop offset="100%" stopColor="#FDBB2D" />
							</linearGradient>
						</svg>
					)}
					<a href={link} className={className} download={isDownload}>
						{label}
						{icon && (
							<div className={styles.iconwrapper}>
								<FeatherIcon icon={icon} />
							</div>
						)}
					</a>
				</>
			)
	}
}
