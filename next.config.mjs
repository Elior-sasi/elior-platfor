/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/elior-platfor' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/elior-platfor/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
