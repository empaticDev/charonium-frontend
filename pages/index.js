import Head from 'next/head'

import { getAllPages } from '../lib/api'
import { SharedBlockManager, SharedHeroManager } from '@components/shared'

export default function Home({ page }) {
	return (
		<>
			<Head>
				<title>{page.attributes.title}</title>
			</Head>

			<h2> page: {page.attributes.title}</h2>
			<SharedHeroManager blocks={page.attributes.hero} />
			<SharedBlockManager blocks={page.attributes.blocks} />
		</>
	)
}

export async function getStaticProps() {
	const data = await getAllPages()

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
