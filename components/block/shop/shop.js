import { client } from '../../../lib/shopify'
import Cookies from 'js-cookie'
import { addProductToCart, getCartRemote } from '../../../lib/cart'
import classNames from 'classnames/bind'
import styles from './shop.module.scss'
import { useState, useEffect } from 'react'

import { BlockWrapper } from '@components/block'
import {
	PartialTextBlock,
	PartialProduct,
	PartialVariant,
	PartialButton,
} from '@components/partial'

let cx = classNames.bind(styles)

let vat = 0.19

export default function Shop({
	header,
	description,
	products,
	decoration,
	id,
	anchor,
}) {
	let className = cx({
		shop: true,
		right: true, // align it to the right
	})

	const [selectedProduct, setSelectedProduct] = useState(-1) // out of range so none selected by default
	const [selectedVariant, setSelectedVariant] = useState(-1) // out of range so none selected by default
	const [addedToCart, setAddedToCart] = useState('no')
	const [cartUpdated, setCartUpdated] = useState(0)
	const [cart, setCart] = useState('false')
	const [currentPrice, setCurrentPrice] = useState(0)

	const checkoutId = Cookies.get('checkoutId')

	let initialCartPrice = 0

	useEffect(() => {
		checkoutId &&
			getCartRemote(checkoutId).then((cart) => {
				setCart(cart)
				try {
					initialCartPrice = cart.totalPrice
					setCurrentPrice(cart.totalPrice)
				} catch (error) {
					console.log('no cart yet')
				}
			})
	}, [cartUpdated])

	const addToCart = async () => {
		const product = products[selectedProduct]
		const variant = product.variants[selectedVariant]

		try {
			await addProductToCart([
				{
					variantId: variant.id,
					quantity: 1,
				},
			])
			console.log('add to cart - await', cart)
			setAddedToCart('Added to Cart!')
			setCartUpdated(cartUpdated + 1)
			setSelectedProduct(-1)
		} catch (error) {
			setAddedToCart('Sorry, there was an error adding to cart.')
			console.log('Error adding to cart (shop.js)', error)
		}
	}

	const handleCheckout = () => {
		let str = window.localStorage.getItem('cart')
		try {
			let obj = JSON.parse(str)
			window.open(obj.webUrl)
		} catch (error) {
			setAddedToCart('Error checking out')
			console.error('Error handling checkout (shop.js)', error)
		}
	}

	const cartPage = {
		data: {
			attributes: {
				slug: 'cart',
			},
		},
	}

	return (
		<BlockWrapper id={id} anchor={anchor} decoration={decoration}>
			<div className={className} id={'shop-commponent'}>
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
								<div className={styles.radios} key={product.id}>
									<input
										readOnly
										type="radio"
										name="products"
										checked={selectedProduct === index}
										onClick={() => {
											setSelectedProduct(index)
											cart && setCurrentPrice(cart.totalPrice)
											setSelectedVariant(-1)
											setAddedToCart('no')
											document.getElementById('variantlist').scrollIntoView()
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
							<div className={styles.asterisk} id="variantlist">
								<p>* Inclusive gratis</p>
								<svg
									viewBox="0 0 40 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.35999 0.889854C8.35999 0.794616 8.39386 0.713663 8.46159 0.646997C8.52932 0.58033 8.61157 0.546997 8.70833 0.546997L12.7722 0.546997C12.869 0.546997 12.9512 0.58033 13.0189 0.646997C13.0867 0.713663 13.1205 0.794616 13.1205 0.889854L13.1205 20.2041C13.1205 20.2994 13.0867 20.3803 13.0189 20.447C12.9512 20.5137 12.869 20.547 12.7722 20.547L8.1568 20.547C7.94393 20.547 7.80847 20.4518 7.75041 20.2613L4.87666 10.3184C4.85731 10.2613 4.82345 10.2279 4.77507 10.2184C4.72669 10.2089 4.7025 10.2422 4.7025 10.3184L4.76055 20.2041C4.76055 20.2994 4.72669 20.3803 4.65895 20.447C4.59122 20.5137 4.50898 20.547 4.41222 20.547L0.348334 20.547C0.251575 20.547 0.169329 20.5137 0.101598 20.447C0.0338664 20.3803 6.70197e-07 20.2994 6.66965e-07 20.2041L1.16331e-08 0.889854C8.40169e-09 0.794616 0.0338657 0.713664 0.101597 0.646997C0.169329 0.58033 0.251574 0.546997 0.348333 0.546997L4.90569 0.546997C5.11856 0.546997 5.25402 0.642235 5.31208 0.832711L8.21485 10.8327C8.23421 10.8899 8.26807 10.9184 8.31645 10.9184C8.36483 10.9184 8.38902 10.8803 8.38902 10.8041L8.35999 0.889854Z"
										fill="url(#paint0_linear_224_1461)"
									/>
									<path
										d="M26.299 4.26128C26.299 4.35652 26.2651 4.43747 26.1974 4.50414C26.1297 4.57081 26.0474 4.60414 25.9507 4.60414L20.1161 4.60414C20.0193 4.60414 19.971 4.65176 19.971 4.747L19.971 8.347C19.971 8.44224 20.0193 8.48985 20.1161 8.48985L23.3091 8.48985C23.4059 8.48985 23.4881 8.52319 23.5559 8.58985C23.6236 8.65652 23.6575 8.73747 23.6575 8.83271L23.6575 12.2327C23.6575 12.328 23.6236 12.4089 23.5559 12.4756C23.4881 12.5422 23.4059 12.5756 23.3091 12.5756L20.1161 12.5756C20.0193 12.5756 19.971 12.6232 19.971 12.7184L19.971 20.2041C19.971 20.2994 19.9371 20.3803 19.8694 20.447C19.8016 20.5137 19.7194 20.547 19.6226 20.547L15.5007 20.547C15.4039 20.547 15.3217 20.5137 15.2539 20.447C15.1862 20.3803 15.1523 20.2994 15.1523 20.2041L15.1523 0.889854C15.1523 0.794616 15.1862 0.713664 15.2539 0.646997C15.3217 0.58033 15.4039 0.546997 15.5007 0.546997L25.9507 0.546997C26.0474 0.546997 26.1297 0.58033 26.1974 0.646997C26.2651 0.713663 26.299 0.794616 26.299 0.889854L26.299 4.26128Z"
										fill="url(#paint1_linear_224_1461)"
									/>
									<path
										d="M39.6516 0.546997C39.7483 0.546997 39.8306 0.58033 39.8983 0.646997C39.9661 0.713663 39.9999 0.794616 39.9999 0.889854L39.9999 4.26128C39.9999 4.35652 39.9661 4.43747 39.8983 4.50414C39.8306 4.57081 39.7483 4.60414 39.6516 4.60414L36.0521 4.60414C35.9554 4.60414 35.907 4.65176 35.907 4.747L35.907 20.2041C35.907 20.2994 35.8731 20.3803 35.8054 20.447C35.7377 20.5137 35.6554 20.547 35.5587 20.547L31.4367 20.547C31.34 20.547 31.2577 20.5137 31.19 20.447C31.1223 20.3803 31.0884 20.2994 31.0884 20.2041L31.0884 4.747C31.0884 4.65176 31.04 4.60414 30.9433 4.60414L27.489 4.60414C27.3922 4.60414 27.31 4.57081 27.2422 4.50414C27.1745 4.43747 27.1406 4.35652 27.1406 4.26128L27.1406 0.889854C27.1406 0.794616 27.1745 0.713664 27.2422 0.646997C27.31 0.58033 27.3922 0.546997 27.489 0.546997L39.6516 0.546997Z"
										fill="url(#paint2_linear_224_1461)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_224_1461"
											x1="11.5766"
											y1="1.99782"
											x2="0.498672"
											y2="9.9259"
											gradientUnits="userSpaceOnUse">
											<stop stopColor="#DDB52E" />
											<stop offset="0.41088" stopColor="#ABC085" />
											<stop offset="1" stopColor="#65CFFF" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_224_1461"
											x1="24.9873"
											y1="1.99782"
											x2="14.5967"
											y2="8.31528"
											gradientUnits="userSpaceOnUse">
											<stop stopColor="#DDB52E" />
											<stop offset="0.41088" stopColor="#ABC085" />
											<stop offset="1" stopColor="#65CFFF" />
										</linearGradient>
										<linearGradient
											id="paint2_linear_224_1461"
											x1="38.4867"
											y1="1.99782"
											x2="27.4824"
											y2="9.71639"
											gradientUnits="userSpaceOnUse">
											<stop stopColor="#DDB52E" />
											<stop offset="0.41088" stopColor="#ABC085" />
											<stop offset="1" stopColor="#65CFFF" />
										</linearGradient>
									</defs>
								</svg>
								<p>mit zugang zum UNDERVERSE und exclusive incentives</p>
							</div>
						</div>
						{selectedProduct >= 0 && (
							<div className={styles.variants}>
								<p className={styles.variants__header}>Material auswählen</p>
								{products[selectedProduct].variants.map((variant, index) => (
									<div className={styles.radios} key={variant.id}>
										<input
											readOnly
											type="radio"
											name="variants"
											checked={selectedVariant === index}
											onClick={() => {
												setSelectedVariant(index)
												cart &&
													setCurrentPrice(
														(
															parseInt(cart.totalPrice) +
															parseInt(variant.price)
														).toFixed(2)
													)
											}}
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
								{addedToCart === 'Added to Cart!' ? (
									''
								) : (
									<>
										<div className={styles.currentcart}>
											<p>Tax:</p>
											<p>
												€
												{products[selectedProduct].variants[selectedVariant]
													.price * vat}
											</p>
										</div>
										<div className={styles.currentcart}>
											<p>Item total:</p>
											<p>
												€
												{
													products[selectedProduct].variants[selectedVariant]
														.price
												}
											</p>
										</div>
										<div className={styles.buttonwrapper}>
											<div
												className={styles.pseudobutton}
												onClick={() => {
													addToCart()
													document
														.getElementById('shop-commponent')
														.scrollIntoView()
												}}>
												<PartialButton label={'Add to Cart'} />
											</div>
											{addedToCart != 'no' ? addedToCart : ''}
										</div>
									</>
								)}
								{addedToCart === 'Added to Cart!' && cart === 'false' ? (
									<div className={styles.buttonwrapper}>
										<div
											className={styles.pseudobutton}
											onClick={handleCheckout}>
											<PartialButton label={'Checkout Now'} />
										</div>
										<PartialButton
											label={'View Cart'}
											type={'internal'}
											page={cartPage}
										/>
									</div>
								) : (
									''
								)}
							</>
						)}
						{/* check if there is a cart, then show it here  */}
						{cart === 'false' ? (
							''
						) : (
							<>
								<div className={styles.currentcart}>
									<p>Cart total:</p>
									<p>€{currentPrice}</p>
								</div>
								<div className={styles.buttonwrapper}>
									<div className={styles.pseudobutton} onClick={handleCheckout}>
										<PartialButton label={'Checkout Now'} />
									</div>
									<PartialButton
										label={'View Cart'}
										type={'internal'}
										page={cartPage}
									/>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</BlockWrapper>
	)
}
