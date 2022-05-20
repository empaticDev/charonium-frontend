import classNames from 'classnames/bind'
import styles from './variant.module.scss'
import Image from 'next/image'
import { useState } from 'react'

let cx = classNames.bind(styles)

export default function Variant({ variant, selected }) {
	const [imageLoaded, setImageLoaded] = useState(false)

	let className = cx({
		variant: true,
		selected: selected,
	})

	let imageURL = ''

	if (variant.image.src != null) {
		imageURL = variant.image.src
	}

	let imageClass = cx({
		image: true,
		notloaded: !imageLoaded,
		loaded: imageLoaded,
	})

	// variant image: image: {id: "gid://shopify/ProductImage/33251377971425", src: "https://cdn.shopify.com/s/files/1/0606/6362/8001/products/bronze1.png?v=1635241995", altText: null, width: 1920, height: 1080, …}
	const shopifyLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	return (
		<div className={className}>
			{variant.title && (
				<div className={styles.title}>
					<div className={styles.imagetext}>
						<Image
							className={styles.variantimage}
							loader={shopifyLoader}
							src={imageURL}
							width={40}
							height={40}
							objectFit={'contain'}
							onLoad={(event) => {
								const target = event.target
								if (target.src.indexOf('data:image/gif;base64') < 0) {
									setImageLoaded(true)
								}
							}}
						/>
						<p>{variant.title}</p>
					</div>
					<p>€{variant.price}</p>
				</div>
			)}
		</div>
	)
}
