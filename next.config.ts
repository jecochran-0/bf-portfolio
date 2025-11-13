import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds to avoid config issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail build on type errors (but still show them)
    ignoreBuildErrors: false,
  },
  // Ensure clean builds
  swcMinify: true,
};

export default nextConfig;
