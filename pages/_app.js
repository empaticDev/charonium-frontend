import '../styles/globals.scss'
import { LayoutDefault, LayoutHeader, LayoutFooter } from '@components/layout'
import { CookieBanner } from '@palmabit/react-cookie-law'
import { useState, useEffect } from 'react'

const cookieMessage =
	'We use cookies to improve user experience and analyze website traffic. To manage your cookie preferences, please select and accept your preferences:'

function MyApp({ Component, pageProps }) {
	const [cookies, setCookies] = useState(false)

	console.log(cookies)

	return (
		<>
			<div>
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
							backgroundColor: '#FFFFFF',
							position: 'fixed',
							zIndex: '10000',
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
			</div>
			<div id="overlay" className={cookies ? 'hide' : 'cookie-overlay'}></div>
			<LayoutHeader {...pageProps} />
			<LayoutDefault>
				<Component {...pageProps} />
			</LayoutDefault>
			<LayoutFooter {...pageProps} />
		</>
	)
}

export default MyApp
