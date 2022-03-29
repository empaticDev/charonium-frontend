const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
		'../../components/**/*.story.@(js|jsx|ts|tsx)',
	],
	staticDirs: ['../../public'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	core: {
		builder: 'webpack5',
	},
	framework: '@storybook/react',
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						postcssOptions: {
							plugins: [tailwindcss(), autoprefixer()],
						},
					},
				},
				{
					loader: 'sass-loader',
					options: {
						implementation: require('sass'),
					},
				},
			],
		})

		return config
	},
}
