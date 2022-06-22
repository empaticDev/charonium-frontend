import Head from 'next/head'

import { getAllPages } from '../lib/api'
import { SharedBlockManager, SharedHeroManager } from '@components/shared'

import { client } from '../lib/shopify'

export default function Home({ page, products }) {
	return (
		<>
			<Head>
				<title>{page.attributes.title}</title>
			</Head>
			<SharedHeroManager blocks={page.attributes.hero} />
			<SharedBlockManager blocks={page.attributes.blocks} products={products} />
		</>
	)
}

export async function getStaticProps() {
	const data = await getAllPages()
	let products = []

	try {
		products = await client.product.fetchAll()
	} catch (error) {
		// todo: send some meaningful error message through to shop component
		console.log('Error fetching products from Shopify:', error)
		products = []
	}

	return {
		props: {
			page: {
				...data?.pages.data[0],
			},
			footer: {
				...data?.footer.data.attributes,
			},
			aboutUs: {
				...data?.aboutUs.data.attributes,
			},
			products: JSON.parse(JSON.stringify(products)),
		},
	}
}
