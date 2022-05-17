import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import { getAllPagesWithSlug, getPageBySlug } from '../lib/api'
import { client } from '../lib/shopify'

import { SharedBlockManager, SharedHeroManager } from '@components/shared'

export default function page({ page, products }) {
	const router = useRouter()

	if (!router.isFallback && !page?.attributes.slug) {
		return <ErrorPage statusCode={404} />
	}

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

export async function getStaticProps({ params, preview = null }) {
	const data = await getPageBySlug(params.slug[0])
	let products = []

	try {
		products = await client.product.fetchAll()
	} catch (error) {
		// todo: send some meaningful error message through to shop component
		console.log('Error fetching products from Shopify', error)
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

export async function getStaticPaths() {
	const allPages = await getAllPagesWithSlug()

	return {
		paths: allPages.pages.data.map((page) => `/${page.attributes.slug}`) || [],
		fallback: false,
	}
}
