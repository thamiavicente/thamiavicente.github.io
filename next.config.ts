import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
};

export default nextConfig;
