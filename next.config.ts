import type { NextConfig } from "next";

// Static export so the site can be hosted anywhere (Vercel, GitHub Pages, S3).
// NEXT_PUBLIC_BASE_PATH is only needed when hosting under a sub-path (e.g. GitHub Pages).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
