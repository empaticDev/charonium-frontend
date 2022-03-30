import * as NextImage from 'next/image'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	badgesConfig: {
		[BADGE.STABLE]: {
			styles: {
				backgroundColor: '#DCF2EA',
				borderColor: '#317159',
				color: '#317159',
			},
			tooltip: {
				title: 'The component is in production',
			},
		},
	},
	badges: [BADGE.BETA],
}
