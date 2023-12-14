/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ['bitoai-blog.ghost.io'],
  },
}

module.exports = nextConfig
