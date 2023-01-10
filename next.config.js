/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images:{
    domains: ["image.eveonline.com"]
  }
}

module.exports = nextConfig
