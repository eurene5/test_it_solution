import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/600/**", // Toutes les images dans le chemin /600/
      },
    ],
  },
};

export default nextConfig;
