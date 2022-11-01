const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    swcPlugins: [
      ['next-superjson-plugin', {}],
    ],
  },
  i18n,
}

module.exports = nextConfig
