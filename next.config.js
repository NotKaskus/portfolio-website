const withBundleAnalyzer = require('@next/bundle-analyzer');
const { withContentlayer } = require('next-contentlayer');

const bundleWithAnalyzer = withBundleAnalyzer({
  enabled: false,
});

/** @type {import('next').NextConfig} */
module.exports = bundleWithAnalyzer(
  withContentlayer({
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    webpack: (config) => {
      // config.externals is needed to resolve the following errors:
      // Module not found: Can't resolve 'bufferutil'
      // Module not found: Can't resolve 'utf-8-validate'
      config.externals.push({
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate',
      });

      return config;
    },
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lanyard.kyrie25.me',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '**.anilist.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'dev.virtualearth.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '**.discordapp.net',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '**.discordapp.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '**.scdn.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'opengraph.githubassets.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'http.cat',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }),
);
