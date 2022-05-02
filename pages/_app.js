import '../styles/globals.scss'
import { LayoutDefault, LayoutHeader, LayoutFooter } from '@components/layout'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<LayoutHeader />
			<LayoutDefault>
				<Component {...pageProps} />
			</LayoutDefault>
			<LayoutFooter {...pageProps} />
		</>
	)
}

export default MyApp
