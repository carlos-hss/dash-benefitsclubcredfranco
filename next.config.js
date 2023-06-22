/** @type {import('next').NextConfig} */
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  const env = {
    NEXT_PUBLIC_API_URL: (() => {
      if (isDev) return 'http://127.0.0.1:8000/api/v1';
      if (isProd) {
        return '';
      }
      if (isStaging) return '';
      return 'NEXT_APP_API_URL:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
  };

  return {
    env,
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true,
        },
        {
          source: '/admin',
          destination: '/admin/login',
          permanent: true,
        },
      ];
    },
  };
};

module.exports = nextConfig;
