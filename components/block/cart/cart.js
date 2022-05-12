import { getCartRemote } from '../../../lib/cart'
import classNames from 'classnames/bind'
import styles from './cart.module.scss'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import { BlockWrapper } from '@components/block'
import { PartialTextBlock } from '@components/partial'

let cx = classNames.bind(styles)

export default function Cart({ header, content }) {
	let className = cx({
		cart: true,
	})

	const [cartLoaded, setCartLoaded] = useState(false)
	const [productList, setProductList] = useState([])
	const checkoutId = Cookies.get('checkoutId')

	useEffect(() => {
		getCartRemote(checkoutId).then((checkout) => {
			setProductList(checkout.lineItems)
			setCartLoaded(true)
		})
	}, [])

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
				<p>Cart loaded: {cartLoaded ? 'true' : 'false'}</p>

				<div className={styles.products}>
					<table>
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Unit Price</th>
								<th>Total</th>
							</tr>
						</thead>
						{cartLoaded && (
							<tbody>
								{productList.map((product, index) => (
									<tr key={product.id}>
										{console.log('ProductList', index, product)}
										<td>
											{product.title}; {product.variant.title}
										</td>
										<td>{product.quantity}</td>
										<td>€{product.variant.price}</td>
										<td>€{product.variant.price * product.quantity}</td>
									</tr>
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
		</BlockWrapper>
	)
}
