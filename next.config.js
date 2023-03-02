/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  env: {
    urlPlataform: process.env.APP_PLATAFORMA_URL,
  },
  ignorePatterns: ['temp.js', '**/vendor/*.js', './Exercicios'],
}

module.exports = nextConfig
  
