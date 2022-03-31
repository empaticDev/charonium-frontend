import Head from 'next/head'

import { LayoutHeader, LayoutFooter, LayoutHome } from '@components/layout'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="/fonts/Barlow-Regular.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Barlow-Medium.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/Poppins-Bold.woff2"
					as="font"
					crossOrigin=""
				/>
			</Head>

			<LayoutHeader />

			<LayoutHome />

			<LayoutFooter />
			<LayoutFooter alternate="true" />
		</div>
	)
}
