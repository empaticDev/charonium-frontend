import '../styles/globals.scss'
import { LayoutDefault, LayoutHeader, LayoutFooter } from '@components/layout'
import { CookieBanner } from '@palmabit/react-cookie-law'
import { useState, useEffect } from 'react'

const cookieMessage =
	'We use cookies to improve user experience and analyze website traffic. To manage your cookie preferences, please select and accept your preferences:'

function MyApp({ Component, pageProps }) {
	const [cookies, setCookies] = useState(false)

	useEffect(() => {
		cookies
			? (document.body.style.overflow = 'scroll')
			: (document.body.style.overflow = 'hidden')

		// document.getElementById('overlay').style.display = 'fixed'
	}, [cookies])

	return (
		<>
			<CookieBanner
				message={cookieMessage}
				wholeDomain={true}
				onAccept={() => {
					setCookies(true)
				}}
				policyLink={'/gdpr'}
				necessaryOptionText={'Necessary'}
				managePreferencesButtonText={'Manage Preferences'}
				showPreferencesOption={false}
				showStatisticsOption={true}
				showMarketingOption={true}
				onAcceptPreferences={() => {}}
				onAcceptStatistics={() => {}}
				onAcceptMarketing={() => {}}
				styles={{
					button: {
						backgroundColor: '#57c5fd',
						color: '#121212',
						padding: '0.5em 1.5em 0.5em 1.5em',
						marginLeft: '0.5em',
						borderRadius: '0.5em',
						fontFamily: 'BarlowCondensed, sans-serif',
					},
					policy: {
						color: '#121212',
						padding: '1em 1em 1em 1em',
						fontFamily: 'BarlowCondensed, sans-serif',
						textDecoration: 'underline',
					},
					dialog: {
						boxShadow: '0em 2em 10em 60em rgb(0,0,0,0.5)',
						backgroundColor: '#FFFFFF',
						position: 'fixed',
						zIndex: '100000',
						width: '100%',
						padding: '1em 1em 1em 1em',
					},
					optionLabel: {
						color: '#121212',
						paddingLeft: '0.5em',
					},
					checkbox: {
						borderRadius: '4px',
					},
				}}
			/>
			{/* <div id="overlay" className="cookie-overlay"></div> */}
			<LayoutHeader {...pageProps} />
			<LayoutDefault>
				<Component {...pageProps} />
			</LayoutDefault>
			<LayoutFooter {...pageProps} />
		</>
	)
}

export default MyApp
