import Head from 'next/head'

import { getAllPages } from '../lib/api'
import { SharedBlockManager, SharedHeroManager } from '@components/shared'

import { client } from '../lib/shopify'

export default function Home({ page }) {
	return (
		<>
			<Head>
				<title>{page.attributes.title}</title>
			</Head>
			<SharedHeroManager blocks={page.attributes.hero} />
			<SharedBlockManager blocks={page.attributes.blocks} />
		</>
	)
}

export async function getStaticProps() {
	const data = await getAllPages()

	// const products = await client.product.fetchAll() // Fetch product

	client.product.fetchAll().then((products) => {
		// Do something with the products
		console.log(products)
	})

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
			// products: {
			// 	products,
			// },
		},
	}
}
