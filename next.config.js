/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["scontent.fmnl25-5.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;
