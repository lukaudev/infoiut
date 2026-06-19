import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Verificação mais rápida durante desenvolvimento
    tsconfigPath: "./tsconfig.json",
  },
  // Otimizar bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Compressão melhorada para o cliente
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Agrupar bibliotecas grandes
            vendor: {
              filename: "chunks/vendor.js",
              test: /node_modules/,
              priority: 10,
              reuseExistingChunk: true,
              name(module: any) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
              },
            },
          },
        },
      };
    }
    return config;
  },
  // Cache de imagens otimizado
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  productionBrowserSourceMaps: false,
  turbopack: {},
};

export default nextConfig;
 