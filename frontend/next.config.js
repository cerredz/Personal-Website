/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
    transpilePackages: ["ui"],
    // runtime: "experimental-edge",
  },
};

module.exports = nextConfig;
