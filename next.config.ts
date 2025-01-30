/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.ashyo.fullstackdev.uz',
        port: '',
        pathname: '/uploads/**',
        search: '',
      },
      {
        protocol: 'http', // localhost uses http
        hostname: 'localhost',
        port: '3010', // Specify the port used by your localhost
        pathname: '/uploads/**', // Match your specific path structure
      },
    ],
  },
};

module.exports = nextConfig;
