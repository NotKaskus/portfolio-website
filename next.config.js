/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'paul.is-a.dev',
            port: '',
            pathname: '/assets/**',
          },
        ],
    }
}

module.exports = nextConfig
