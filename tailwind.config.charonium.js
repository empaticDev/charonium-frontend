const colors = require('tailwindcss/colors')

const base = 16

const em = (px) => `${px / base}em`
// eslint-disable-next-line no-unused-vars
const rem = (px) => ({ [px]: `${px / base}rem` })
// eslint-disable-next-line no-unused-vars
const px = (num) => ({ [num]: `${num}px` })

function withOpacityColor(variableName) {
	return ({ opacityVariable, opacityValue }) => {
		if (opacityValue !== undefined) {
			return `hsla(var(${variableName}-h),var(${variableName}-s),var(${variableName}-l), ${opacityValue})`
		}
		if (opacityVariable !== undefined) {
			return `hsla(var(${variableName}-h),var(${variableName}-s),var(${variableName}-l), var(${opacityVariable}, 1))`
		}
		return `var(${variableName})`
	}
}

const screensizes = {
	sm: em(490),
	// => @media (min-width: 490px) { ... }
	md: em(768),
	// => @media (min-width: 768px) { ... }
	lg: em(1024),
	// => @media (min-width: 1024px) { ... }
	xl: em(1280),
	// => @media (min-width: 1280px) { ... }
	'2xl': em(1536),
	// => @media (min-width: 1536px) { ... }
}

module.exports = {
	separator: '__',
	textSizes: {},
	theme: {
		debugScreens: {
			position: ['bottom', 'left'],
		},
		fontFamily: {
			sans: ['"Barlow"', 'sans-serif'],
			heading: ['"Poppins"', 'sans-serif'],
		},
		fontWeight: {
			normal: 'normal',
			medium: '500',
			bold: 'bold',
		},
		screens: screensizes,
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			red: colors.red,
			green: colors.emerald,
			yellow: colors.amber,
			brand: {
				50: withOpacityColor('--clr-brand-50'),
				100: withOpacityColor('--clr-brand-100'),
				200: withOpacityColor('--clr-brand-200'),
				300: withOpacityColor('--clr-brand-300'),
				400: withOpacityColor('--clr-brand-400'),
				500: withOpacityColor('--clr-brand-500'),
				600: withOpacityColor('--clr-brand-600'),
				700: withOpacityColor('--clr-brand-700'),
				800: withOpacityColor('--clr-brand-800'),
				900: withOpacityColor('--clr-brand-900'),
			},
			contrast: {
				50: withOpacityColor('--clr-contrast-50'),
				100: withOpacityColor('--clr-contrast-100'),
				200: withOpacityColor('--clr-contrast-200'),
				300: withOpacityColor('--clr-contrast-300'),
				400: withOpacityColor('--clr-contrast-400'),
				500: withOpacityColor('--clr-contrast-500'),
				600: withOpacityColor('--clr-contrast-600'),
				700: withOpacityColor('--clr-contrast-700'),
				800: withOpacityColor('--clr-contrast-800'),
				900: withOpacityColor('--clr-contrast-900'),
			},
			bg: withOpacityColor('--clr-bg'),
		},
		extend: {
			textColor: {
				skin: {
					base: withOpacityColor('--clr-text-base'),
					muted: withOpacityColor('--clr-text-muted'),
					inverted: withOpacityColor('--clr-text-inverted'),
					brand: withOpacityColor('--clr-text-brand'),
				},
			},
			backgroundColor: {
				skin: {
					bg: withOpacityColor('--clr-bg'),
					'bg-inverted': withOpacityColor('--clr-bg-inverted'),
					brand: withOpacityColor('--clr-bg-brand'),
				},
			},
			backdropBlur: {
				xs: '2px',
			},
			borderWidth: {
				1: '0.0625rem',
			},
			borderColor: {
				skin: {
					base: withOpacityColor('--clr-bg'),
					inverted: withOpacityColor('--clr-bg-inverted'),
					brand: withOpacityColor('--clr-bg-brand'),
				},
			},
			zIndex: {
				99: 99,
			},
			transitionDelay: {
				0: '0ms',
			},
			minHeight: {
				'screen-50': '50vh',
				'screen-80': '80vh',
			},
			width: {
				'9/10': '90%',
			},
			maxWidth: {
				90: '90%',
				80: '80%',
			},
			typography: {
				DEFAULT: {
					css: {
						color: 'inherit',
						fontWeight: 'inherit',
						a: false,
						strong: {
							color: 'inherit',
						},
						ul: {
							'> li': {
								'&::before': {
									borderRadius: '0',
									backgroundColor: 'currentColor',
								},
							},
						},
						h1: {
							color: 'inherit',
							fontFamily: 'Poppins',
							fontWeight: 'bold',
						},
						h2: {
							color: 'inherit',
							fontFamily: 'Poppins',
							fontWeight: 'bold',
						},
						h3: {
							color: 'inherit',
							fontFamily: 'Poppins',
							fontWeight: 'bold',
						},
						h4: {
							color: 'inherit',
							fontFamily: 'Poppins',
							fontWeight: 'bold',
						},
						h5: {
							color: 'inherit',
							fontFamily: 'Poppins',
							fontWeight: 'bold',
						},
						h6: {
							color: 'inherit',
							fontFamily: 'Poppins',
							fontWeight: 'bold',
						},
					},
				},
			},
		},
	},
	// modules: {
	// 	textSizes: false,
	// },
	plugins: [
		require('tailwindcss-fluid')({
			textSizes: false,
		}),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('tailwindcss-debug-screens'),
	],
}
