import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static rendering for pages without server components
  output: 'standalone',
  // Ensure environment variables are available
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
  // Disable image optimization for now
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
