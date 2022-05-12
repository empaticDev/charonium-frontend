import Cookies from 'js-cookie'
import { client } from './shopify'

const addProductToCart = async (product) => {
	Cookies.remove('cart')
	let checkoutId = Cookies.get('checkoutId')

	if (checkoutId === 'undefined') {
		checkoutId = await createCheckout()
	}

	Cookies.set('checkoutId', checkoutId)

	// todo check if item exists already, then could increase quantity

	const cart = await client.checkout.addLineItems(checkoutId, product)

	await storeCart(cart)
}

const getCart = async () => {
	return JSON.parse(window.localStorage.getItem('cart'))
}

const storeCart = async (cart) => {
	const cartInfo = {
		lineItems: cart.lineItems,
		totalPrice: cart.totalPrice,
		id: cart.id,
		currencyCode: cart.currencyCode,
		subTotalPrice: cart.subTotalPrice,
		webUrl: cart.webUrl,
	}
	const storage = window.localStorage
	storage.setItem('cart', JSON.stringify(cartInfo))
}

const createCheckout = async () => {
	let newCheckout = await client.checkout.create() // create new checkout
	const id = newCheckout.id
	return id
}

export { addProductToCart, getCart, createCheckout, storeCart }
