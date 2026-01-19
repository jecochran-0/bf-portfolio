import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during builds to avoid config issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail build on type errors (but still show them)
    ignoreBuildErrors: false,
  },
  // Ensure CSS is loaded before page becomes interactive
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["warn", "error"] } : false,
  },
  // Set workspace root to silence lockfile warning
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
