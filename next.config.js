/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  future: { webpack5: true },
  webpack: (config, options) => {
    
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false, module: false 
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.resolve(__dirname, 'public'),
      '@components': path.resolve(__dirname, 'components'),
    }

    return config
  },
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}

module.exports = nextConfig
