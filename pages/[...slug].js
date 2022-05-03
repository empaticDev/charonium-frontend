import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'

import { getAllPagesWithSlug, getPageBySlug } from '../lib/api'

import { SharedBlockManager } from '@components/shared'

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

			<h2> page: {page.attributes.title}</h2>
			<SharedBlockManager blocks={page.attributes.blocks} />
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
