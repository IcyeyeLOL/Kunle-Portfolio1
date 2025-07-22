/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  }
};

module.exports = nextConfig;