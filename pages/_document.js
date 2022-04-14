import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
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
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
