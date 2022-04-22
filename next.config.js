/** @type {import('next').NextConfig} */

const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		loader: 'imgix',
		path: 'http://localhost:3000',
		domains: [process.env.IMAGES_DOMAIN],
	},
	async redirects() {
		return [
			{
				source: '/welcome',
				destination: '/',
				permanent: true,
			},
		]
	},
	webpack: (config, { dev }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@assets': path.resolve(__dirname, 'public'),
			'@components': path.resolve(__dirname, 'components'),
			'@lib': path.resolve(__dirname, 'lib'),
		}

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		config.plugins.push(new StylelintPlugin())

		return config
	},
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		}
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}

module.exports = nextConfig
