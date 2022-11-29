const withPWA = require("next-pwa");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const pwaConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === "development",
    skipWaiting: true,
  },
});
module.exports = { ...pwaConfig(nextConfig) };
