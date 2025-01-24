/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
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
