import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'https://ashyo.store',
      },]
    }
};

export default nextConfig;
