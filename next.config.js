/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: ''
    },
    basePath : process.env.BASE_PATH,
    assetPrefix: process.env.BASE_PATH
  }
  
  module.exports = nextConfig
  