/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ['uploadthing.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
