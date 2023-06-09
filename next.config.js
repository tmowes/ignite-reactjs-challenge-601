/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts', 'api.tsx'],
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
