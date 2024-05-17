import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
