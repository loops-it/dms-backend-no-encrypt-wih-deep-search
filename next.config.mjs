/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'sites.techvoice.lk', '13.213.200.16'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sites.techvoice.lk',
        pathname: '/dms-backend/public/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '13.213.200.16',
        pathname: '/dms-backend/uploads/**',
      },
    ],
  },
};

export default nextConfig;
