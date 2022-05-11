import { client } from '../../../lib/shopify'
import { addProductToCart, getCart } from '../../../lib/cart'
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
			// let checkoutID = await client.checkout.create() // create new checkout
			// console.log('shop.addToCart - create checkout', checkoutID)
			const product = products[selectedProduct]
			const variant = product.variants[selectedVariant]

			// console.log('shop.addToCart - variant checkout', variant)

			addProductToCart([
				{
					variantId: variant.id,
					quantity: 1,
				},
			])
		} catch (error) {
			console.log('shop.addToCart - error', error)
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
							<>
								<div className={styles.buttonwrapper}>
									<div className={styles.pseudobutton} onClick={addToCart}>
										<PartialButton label={'Add to Cart'} />
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
