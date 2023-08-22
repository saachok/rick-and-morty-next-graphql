/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
};

module.exports = {
  images: {
    domains: ['rickandmortyapi.com'],
  },
};
