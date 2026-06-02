/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
  },
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
