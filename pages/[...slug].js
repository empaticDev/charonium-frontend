import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import { getAllPagesWithSlug, getPageBySlug } from '../lib/api'

import { SharedBlockManager, SharedHeroManager } from '@components/shared'

export default function page({ page }) {
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
