import { client } from '../../../lib/shopify'
import classNames from 'classnames/bind'
import styles from './shop.module.scss'

import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'
import { SharedPartialManager } from '@components/shared'

let cx = classNames.bind(styles)

export default function Shop({ header, description, products }) {
	let className = cx({
		shop: true,
		right: true,
	})
	// console.log('shop products', products)
	// let products = []

	return (
		<BlockWrapper>
			<div className={className}>
				<div className={styles.image}>image</div>
				<div className={styles.content}>
					<PartialTextBlock
						title={header.title}
						label={header.label}
						heading={header.heading}
						content={description}
					/>
					<div>
						<ul className={styles.products}>
							{products.map((prod) => (
								<li className={styles.product}>{prod.id}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
