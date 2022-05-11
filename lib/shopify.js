import Client from 'shopify-buy'

export const client = Client.buildClient({
	domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
	storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN,
})
