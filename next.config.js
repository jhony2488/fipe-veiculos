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
  ignorePatterns: ['./Exercicios'],
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', ]
}

module.exports = nextConfig
  
