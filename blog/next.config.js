const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: false,
      env: {
        mongodb_username: 'JacobM',
        mongodb_pw: '9I0a8vupVsVi3Gip',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    reactStrictMode: false,
    env: {
      mongodb_username: 'JacobM',
      mongodb_pw: '9I0a8vupVsVi3Gip',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
// };

// module.exports = nextConfig;
