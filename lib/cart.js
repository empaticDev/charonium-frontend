import Cookies from 'js-cookie'
import { client } from './shopify'

const addProductToCart = async (product) => {
	try {
		Cookies.remove('cart')
		let checkoutId = Cookies.get('checkoutId')

		if (checkoutId === 'undefined') {
			checkoutId = await createCheckout()
		}

		Cookies.set('checkoutId', checkoutId)

		const cart = await client.checkout.addLineItems(checkoutId, product)

		// await storeCart(cart)

		console.log('cart.AddProductToCart', cart)
	} catch (e) {
		console.log('cart: checkoutId error', e)
	}
}

const getCart = async () => {
	return JSON.parse(window.localStorage.getItem('cart'))
}

const storeCart = async ({
	lineItems,
	totalPrice,
	totalPriceV2,
	TotalTax,
	id,
	currencyCode,
	subTotalPrice,
	webUrl,
}) => {
	const cartInfo = {
		lineItems,
		totalPrice,
		totalPriceV2,
		TotalTax,
		id,
		currencyCode,
		subTotalPrice,
		webUrl,
	}
	const storage = window.localStorage
	storage.setItem('cart', JSON.stringify(cartInfo))
}

const createCheckout = async () => {
	let newCheckout = await client.checkout.create() // create new checkout

	const id = newCheckout.id
	// console.log('cart, createCheckout', newCheckout)
	// console.log('cart, createCheckout', newCheckout.id)
	return id
}

export { addProductToCart, getCart, createCheckout, storeCart }
