const nextConfig = {
  output: 'export',
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://chaturbate.com; child-src 'self' https://chaturbate.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;