import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        
        hostname: 'cdn.sanity.io',
        
        pathname: '**',
        
      },
    ],
  },
};

export default nextConfig;
