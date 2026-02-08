import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typescript: { ignoreBuildErrors: true } // we use tsgo to typecheck
};

export default nextConfig;
