import { client } from '../../../lib/shopify'
import { addProductToCart } from '../../../lib/cart'
import classNames from 'classnames/bind'
import styles from './shop.module.scss'
import { useState } from 'react'

import { BlockWrapper } from '@components/block'
import {
	PartialTextBlock,
	PartialProduct,
	PartialVariant,
	PartialButton,
} from '@components/partial'

let cx = classNames.bind(styles)

export default function Shop({ header, description, products }) {
	let className = cx({
		shop: true,
		right: true, // align it to the right
	})

	const [selectedProduct, setSelectedProduct] = useState(-1) // out of range so none selected by default
	const [selectedVariant, setSelectedVariant] = useState(-1) // out of range so none selected by default

	const addToCart = async () => {
		try {
			if (productQuantity < 1) return

			const product = products[selectedProduct]

			const variants = product.variants

			console.log('Fired')
			const variantId = selectedVariant
				? variants.find(({ title }) => title === selectedVariant).id
				: variants[0].id

			addProductToCart([
				{
					variantId,
					quantity: Number(productQuantity),
				},
			])
		} catch (e) {
			console.log(e)
		}
	}

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
					<div className={styles.store}>
						<div className={styles.products}>
							{products.map((product, index) => (
								<div className={styles.radios}>
									<input
										type="radio"
										name="products"
										checked={selectedProduct === index}
										onClick={() => {
											setSelectedProduct(index)
											setSelectedVariant(-1)
										}}
										id={product.id}
									/>
									<label htmlFor={product.id}>
										<PartialProduct
											product={product}
											selected={selectedProduct === index ? true : false}
										/>
									</label>
								</div>
							))}
						</div>
						{selectedProduct >= 0 && (
							<div className={styles.variants}>
								<p className={styles.variants__header}>Material auswählen</p>
								{products[selectedProduct].variants.map((variant, index) => (
									<div className={styles.radios}>
										<input
											type="radio"
											name="variants"
											checked={selectedVariant === index}
											onClick={() => setSelectedVariant(index)}
											id={variant.id}
										/>
										<label htmlFor={variant.id}>
											<PartialVariant
												variant={variant}
												selected={selectedVariant === index ? true : false}
											/>
										</label>
									</div>
								))}
							</div>
						)}
						{selectedVariant >= 0 && (
							<div className={styles.buttonwrapper}>
								<PartialButton
									label={'Add to Cart'}
									className={styles.buybutton}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
