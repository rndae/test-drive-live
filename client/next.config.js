/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig

module.exports = {
  nextConfig,
  env: {
    API_SERVER: process.env.API_SERVER,
  },
};
