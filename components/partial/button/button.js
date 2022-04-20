import classNames from 'classnames/bind'
import styles from './btn.module.scss'
import Link from 'next/link'

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
	}

	return link
}

export default function Button({label, type, style, page, href, download}) {
	let className = cx({
		'btn': true,
	})

    //const link = type === 'external' && page.data != null || href != null ? href : `/${page.data.attributes.slug}`

	const link = getLink(type, page, href, download)
	const isDownload = type === 'download' && download != null ? true : false
    //console.log('btn link', link)

	return (
		<>
        { type === 'internal' ? <Link href={link}><a className={className}>{label}</a></Link> : <a href={link} className={className} download={isDownload}>{label}</a> }
        </>
	)
}
