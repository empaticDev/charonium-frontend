import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	const isDevelopment = process.env.NODE_ENV === 'development'
	const debugClass = isDevelopment ? 'debug-screens' : ''

	return (
		<Html>
			<Head>
				<link rel="icon" href="/favicons/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/favicons/safari-pinned-tab.svg"
					color="#ddb52e"
				/>
				<meta name="msapplication-TileColor" content="#ddb52e" />
				<meta name="theme-color" content="#ffffff" />
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
					href="/fonts/Barlow-SemiBold.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/BarlowCondensed-Light.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/BarlowCondensed-Medium.woff2"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/BarlowCondensed-SemiBold.woff2"
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
			<body className={debugClass}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
