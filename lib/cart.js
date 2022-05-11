import Cookies from 'js-cookie'
import { client } from './shopify'

const addProductToCart = async (product) => {
	// Cookies.remove('cart')
	let checkoutId = Cookies.get('checkoutId')

	// if (checkoutId === 'undefined') {
	// 	checkoutId = await createCheckout()
	// 	Cookies.set('checkoutId', checkoutId)
	// }

	// const cart = await client.checkout.addLineItems(checkoutId, product)
	// await storeCart(cart)
	// console.log('cart.AddProductToCart', cart)

	try {
		if (checkoutId === 'undefined') {
			checkoutId = await createCheckout()
			Cookies.set('checkoutId', checkoutId)
		}
		console.log(checkoutId)
	} catch (e) {
		console.log('checkoutId error')
		console.log(e)
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
	try {
		const { id } = client.checkout.create()
		return id
	} catch (error) {
		console.log('createcheckout error')
		console.log(e)
	}
	// const { id } = await client.checkout.create()
	// return id
}

export { addProductToCart, getCart, createCheckout, storeCart }
