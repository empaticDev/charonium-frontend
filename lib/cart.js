import Cookies from 'js-cookie'
import { client } from './shopify'

const addProductToCart = async (product) => {
	Cookies.remove('cart')
	let checkoutId = Cookies.get('checkoutId')

	if (checkoutId != null) {
		const cart = await client.checkout.addLineItems(checkoutId, product)
		await storeCart(cart)
	} else {
		checkoutId = await createCheckout()
		Cookies.set('checkoutId', checkoutId)
		let cart = await client.checkout.addLineItems(checkoutId, product)
		await storeCart(cart)
	}
}

const getCart = async () => {
	return JSON.parse(window.localStorage.getItem('cart'))
}

const getCartRemote = async (checkoutId) => {
	try {
		let remotecheckout = await client.checkout.fetch(checkoutId)
		return remotecheckout
	} catch (error) {
		console.log('Error fetching checkout from Shopify:', error)
	}
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

export { addProductToCart, getCart, createCheckout, storeCart, getCartRemote }
