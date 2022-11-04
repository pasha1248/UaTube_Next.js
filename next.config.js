/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: 'http://localhost:3000',
  },
  images: {
    domains: ['localhost'],
  },
  experimental: {
    appDir: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       sourse: '/api/:path*',
  //       destination: 'http://localhost:4444/api/:path*',
  //     },
  //     {
  //       sourse: '/uploads/:path*',
  //       destination: 'http://localhost:4444/uploads/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
