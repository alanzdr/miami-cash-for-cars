/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    APP_HOST: isProd ? 'https://miami-cash-for-cars.vercel.app' : 'http://localhost:3000',
  };

  return {
    reactStrictMode: true,
    swcMinify: true,
    env,
    images: {
      deviceSizes: [480, 640, 800, 1080, 1200, 1920],
    },
  }
};
