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
			sans: ['"BarlowCondensed"', 'sans-serif'],
			heading: ['"Poppins"', 'sans-serif'],
		},
		fontWeight: {
			normal: '300',
			medium: '500',
			semibold: '600',
			bold: 'bold',
		},
		textSizes: {
			'4xl': {
				min: '1.75rem',
				max: '5rem',
				minvw: '40em',
				maxvw: '96em',
			},
		},
		screens: screensizes,
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			red: colors.red,
			green: colors.emerald,
			yellow: colors.amber,
			brand: {
				200: withOpacityColor('--clr-brand-200'),
				300: withOpacityColor('--clr-brand-300'),
				DEFAULT: withOpacityColor('--clr-brand-default'),
				500: withOpacityColor('--clr-brand-500'),
				600: withOpacityColor('--clr-brand-600'),
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
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
				'gradient-radial-at-t':
					'radial-gradient(ellipse closest-side, var(--tw-gradient-stops))',
				'gradient-radial-at-top':
					'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
				'gradient-radial-at-b':
					'radial-gradient(ellipse closest-side, var(--tw-gradient-stops))',
				'gradient-radial-at-l':
					'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
				'gradient-radial-at-r':
					'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
				'gradient-radial-at-tl':
					'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
				'gradient-radial-at-tr':
					'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
				'gradient-radial-at-bl':
					'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
				'gradient-radial-at-br':
					'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
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
			spacing: {
				'5p': '5%',
				'xl-5xl': 'var(--space-xl-4xl,4rem)',
				'xl-8xl': 'var(--space-xl-6xl,6rem)',
			},
			typography: {
				DEFAULT: {
					css: {
						color: 'inherit',
						fontWeight: 'inherit',
						a: false,
						p: {
							letterSpacing: "0.05em"
						},
						strong: {
							color: 'inherit',
						},
						blockquote: {
							color: 'inherit',
						},
						code: {
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
	modules: {
		textSizes: false,
	},
	plugins: [
		require('tailwindcss-fluid')({
			textSizes: true,
		}),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('tailwindcss-debug-screens'),
	],
}
