/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "www.shab.ir"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { not: /\.(css|scss|sass)$/ },
      oneOf: [
        {
          resourceQuery: /inline/,
          use: ["@svgr/webpack"],
        },
        {
          loader: "next-image-loader",
          options: { isServer: true, isDev: true, basePath: "", assetPrefix: "" },
        },
      ],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/contest",
        destination: "https://quera.org/contest/add_to_contest/8AA058r9mKbjiuC/",
        permanent: true,
      },
    ];
  },
};
