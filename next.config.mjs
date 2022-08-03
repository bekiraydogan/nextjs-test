/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  basePath : process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH
};

export default   nextConfig;