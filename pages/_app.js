import '../styles/globals.scss'
import { LayoutDefault, LayoutHeader, LayoutFooter } from '@components/layout'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<LayoutHeader />
			<LayoutDefault>
				<Component {...pageProps} />
			</LayoutDefault>
			{console.log('_app.js: ', pageProps.footer)}
			<LayoutFooter {...pageProps.footer} />
		</>
	)
}

export default MyApp
