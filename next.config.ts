/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

   // This is to ignore the build errors in the typescript
   typescript: {
    ignoreBuildErrors: true,
  },

};

module.exports = nextConfig;
