const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
module.exports = withPlaiceholder({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    // SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
