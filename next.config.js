/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['placeimg.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'placeimg.com/640/480/technics',
      },
      {
        protocol: 'http',
        hostname: 'placeimg.com',
      },
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
}

module.exports = nextConfig
