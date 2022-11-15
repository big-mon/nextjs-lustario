/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};
module.exports = nextConfig;
