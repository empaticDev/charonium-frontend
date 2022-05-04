import classNames from 'classnames/bind'
import styles from './block.module.scss'

let cx = classNames.bind(styles)

export default function BlockWrapper({ children, spacing, id, anchor }) {
	let className = cx({
		block: true,
		'spacing--small': spacing != undefined && spacing === 'small' ? true : false,
		'spacing--none': spacing != undefined && spacing === 'none' ? true : false,
	})

	let atts = {}
	let linkFormat = ''
	if(anchor) {
		linkFormat = anchor.name.toLowerCase()
    	linkFormat = encodeURIComponent(linkFormat).replace(/%20/g, '-')
    	linkFormat = `${linkFormat}-${id}`

		atts.id = linkFormat
	}

	return (
		<section {...atts}  className={className}>
			<div className={styles.block__inner}>
				{children}
			</div>		
		</section>
	)
}
