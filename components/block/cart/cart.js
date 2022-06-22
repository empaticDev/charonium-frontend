import { getCartRemote } from '../../../lib/cart'
import { client } from '../../../lib/shopify'
import classNames from 'classnames/bind'
import styles from './cart.module.scss'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Image from 'next/image'

import { BlockWrapper } from '@components/block'
import { PartialTextBlock, PartialButton } from '@components/partial'

let cx = classNames.bind(styles)

export default function Cart({ header, content }) {
	let className = cx({
		cart: true,
	})

	const checkoutId = Cookies.get('checkoutId')
	const [cartLoaded, setCartLoaded] = useState(false)
	const [productList, setProductList] = useState([])
	const [cost, setCost] = useState(0)
	const [updated, setUpdated] = useState(0)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		checkoutId &&
			getCartRemote(checkoutId).then((checkout) => {
				setProductList(checkout.lineItems)
				setCost(checkout.totalPrice)
				setCartLoaded(true)
				setLoading(false)
			})
	}, [updated])

	function increase(id, quantity) {
		const lineItemsToUpdate = [{ id: id, quantity: quantity + 1 }]
		setLoading(true)

		client.checkout
			.updateLineItems(checkoutId, lineItemsToUpdate)
			.then((checkout) => {
				setUpdated(updated + 1) // fire useEffect to update
			})
	}

	function decrease(id, quantity) {
		const lineItemsToUpdate = [{ id: id, quantity: quantity - 1 }]
		setLoading(true)

		client.checkout
			.updateLineItems(checkoutId, lineItemsToUpdate)
			.then((checkout) => {
				setUpdated(updated + 1) // fire useEffect to update
			})
	}

	function remove(id) {
		const lineItemIdsToRemove = [id]
		setLoading(true)

		client.checkout
			.removeLineItems(checkoutId, lineItemIdsToRemove)
			.then((checkout) => {
				setUpdated(updated + 1) // fire useEffect to update
			})
	}

	function handleCheckout() {
		let str = window.localStorage.getItem('cart')
		try {
			let obj = JSON.parse(str)
			window.open(obj.webUrl)
		} catch (error) {
			setAddedToCart('Error checking out')
			console.error('Error handling checkout (shop.js)', error)
		}
	}

	const homePage = {
		data: {
			attributes: {
				slug: '',
			},
		},
	}

	const shopifyLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	return (
		<BlockWrapper>
			<div className={className}>
				<div className={styles.content}>
					<PartialTextBlock
						title={header.title}
						label={header.label}
						heading={header.heading}
						content={content}
					/>
				</div>

				{cartLoaded ? (
					<div className={styles.products}>
						{productList.length > 0 ? (
							<>
								<table className={styles.productstable}>
									<thead>
										<tr className={styles.tablerow}>
											<th>Product</th>
											<th className={styles.centered}>Quantity</th>
											<th className={styles.centered}>Unit Price</th>
											<th className={styles.centered}>Total</th>
											<th></th>
										</tr>
									</thead>

									<tbody>
										{productList.map((product, index) => (
											<tr key={product.id} className={styles.productrow}>
												<td>
													<div className={styles.productlabel}>
														<div className={styles.productlabel__image}>
															<Image
																loader={shopifyLoader}
																src={product.variant.image.src}
																layout={'fill'}
															/>
														</div>
														<div className={styles.productlabel__text}>
															<p className={styles.productlabel__text__title}>
																{product.title}
															</p>
															<p className={styles.productlabel__text__variant}>
																{product.variant.title}
															</p>
														</div>
													</div>
												</td>
												<td className={styles.quantity}>
													<button
														disabled={loading}
														onClick={() =>
															decrease(product.id, product.quantity)
														}>
														-
													</button>
													<p>{product.quantity}</p>
													<button
														disabled={loading}
														onClick={() =>
															increase(product.id, product.quantity)
														}>
														+
													</button>
												</td>
												<td className={styles.centered}>
													€{product.variant.price}
												</td>
												<td className={styles.centered}>
													€
													{(product.variant.price * product.quantity).toFixed(
														2
													)}
												</td>
												<td className={styles.remove}>
													<button
														disabled={loading}
														className={styles.deleteButton}
														onClick={() => remove(product.id)}>
														Remove
													</button>
												</td>
											</tr>
										))}
										<tr></tr>
										<tr></tr>
										<tr className={styles.total}>
											<td></td>
											<td></td>
											<td>Subtotal</td>
											<td>€{cost}</td>
											<td></td>
										</tr>
									</tbody>
								</table>
								<div className={styles.buttons}>
									<PartialButton
										label={'Continue Shopping'}
										type={'internal'}
										style={'Secondary'}
										page={homePage}
									/>
									<div
										className={styles.pseudobutton}
										onClick={() => handleCheckout()}>
										<PartialButton label={'Checkout Now'} />
									</div>
								</div>
								<div className={styles.disclaimer}>
									<p>
										All products include tax, however the exact tax and shipping
										will be calculated at checkout.
									</p>
								</div>
							</>
						) : (
							<div className={styles.emptycart}>
								<p>Your cart is empty.</p>
								<p>Return to the homepage to continue shopping.</p>
								<PartialButton
									label={'Home'}
									type={'internal'}
									page={homePage}
								/>
							</div>
						)}
					</div>
				) : (
					<div className={styles.emptycart}>
						<p>Your cart is empty.</p>
						<p>Return to the homepage to continue shopping.</p>
						<PartialButton label={'Home'} type={'internal'} page={homePage} />
					</div>
				)}
			</div>
		</BlockWrapper>
	)
}
