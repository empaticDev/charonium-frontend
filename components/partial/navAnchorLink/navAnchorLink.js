import classNames from 'classnames/bind'
import styles from './navAnchorLink.module.scss'
import Link from 'next/link'

export default function NavAnchor({id, name}) {

	let cx = classNames.bind(styles)

	let className = cx({
		'item': true,
	})

    let linkFormat = name.toLowerCase()
    linkFormat = encodeURIComponent(linkFormat).replace(/%20/g, '-')
    linkFormat = `#${linkFormat}-${id}`

	return (
        <Link href={linkFormat} scroll={false}>
            <a className={className}>
			    {name}
		    </a>
        </Link>
		
	)
}