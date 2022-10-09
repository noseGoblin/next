/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    mongodb_username: 'JacobM',
    mongodb_pw: '9I0a8vupVsVi3Gip',
    mongodb_cluster: 'cluster0',
    mongodb_database: 'my-site',
  },
};

module.exports = nextConfig;
