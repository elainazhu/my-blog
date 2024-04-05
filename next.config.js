const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

module.exports = {
  ...withNextra(),
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};