module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "utf-8-validate": false,
      bufferutil: false,
      fs: false,
      net: false,
      tls: false,
      http2: false,
      dns: false,
      child_process: false,
    };

    // Force Firestore to use the browser-compatible version
    if (!isServer) {
      config.resolve.alias["firebase/firestore"] = "firebase/firestore/lite";
    }

    return config;
  },
  siteUrl: "https://galendii.dev",
  generateRobotsTxt: true,
  experimental: {
    esmExternals: "loose",
  },
};
