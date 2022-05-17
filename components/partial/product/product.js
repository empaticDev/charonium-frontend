import classNames from 'classnames/bind'
import styles from './product.module.scss'

let cx = classNames.bind(styles)

function getMinPrice(variants) {
	let min = 9999

	variants.forEach((item) => {
		if (item.price < min) {
			min = item.price
		}
	})

	return min
}

export default function Product({ product, selected }) {
	let minPrice = getMinPrice(product.variants)

	let className = cx({
		product: true,
		selected: selected,
	})

	return (
		<div className={className}>
			{product.title && (
				<div className={styles.title}>
					<p>{product.title}</p>
					<p className={styles.price}>ab&nbsp;€{minPrice}*</p>
				</div>
			)}
			{product.description && (
				<div>
					<p className={styles.description}>{product.description}</p>
				</div>
			)}
		</div>
	)
}
