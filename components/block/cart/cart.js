import { getCartRemote } from '../../../lib/cart'
import { client } from '../../../lib/shopify'
import classNames from 'classnames/bind'
import styles from './cart.module.scss'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

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
	const [updated, setUpdated] = useState(0)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getCartRemote(checkoutId).then((checkout) => {
			setProductList(checkout.lineItems)
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

	const homePage = {
		data: {
			attributes: {
				slug: '',
			},
		},
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

				{cartLoaded && (
					<div className={styles.products}>
						{productList.length > 0 ? (
							<table className={styles.productstable}>
								<thead>
									<tr className={styles.tablerow}>
										<th>Product</th>
										<th></th>
										<th>Quantity</th>
										<th></th>
										<th>Unit Price</th>
										<th>Total</th>
										<th></th>
									</tr>
								</thead>

								<tbody>
									{productList.map((product, index) => (
										<tr key={product.id}>
											<td>
												{product.title}; {product.variant.title}
											</td>
											<td>
												<button
													disabled={loading}
													onClick={() =>
														decrease(product.id, product.quantity)
													}>
													-
												</button>
											</td>
											<td className={styles.centered}>
												{loading ? '...' : product.quantity}
											</td>
											<td>
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
												€{product.variant.price * product.quantity}
											</td>
											<td>
												<button
													disabled={loading}
													className={styles.deleteButton}
													onClick={() => remove(product.id)}>
													Remove
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
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
				)}
			</div>
		</BlockWrapper>
	)
}
