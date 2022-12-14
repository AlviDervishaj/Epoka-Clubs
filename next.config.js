/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

const withPWA = require("next-pwa");
const pwaConfig = withPWA({
  dest: "public",
  register: true,
  //strictMode: process.env.NODE_ENV === "development",
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});
module.exports = { ...pwaConfig(nextConfig) };
