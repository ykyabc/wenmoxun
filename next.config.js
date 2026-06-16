/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/baidu_verify_codeva-pTbazaAick.html',
        destination: '/baidu_verify_codeva-pTbazaAick',
      },
    ];
  },
};

module.exports = nextConfig;
