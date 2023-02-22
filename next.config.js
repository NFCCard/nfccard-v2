const { ProvidePlugin } = require("webpack");
const { join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    webpack: config => {
        config.plugins.push(
            new ProvidePlugin({
                React: "react",
            })
        );

        config.resolve.alias = {
            ...config.resolve.alias,
            "@pages": join(__dirname, "./pages"),
            "@api": join(__dirname, "./src/api"),
            "@base": join(__dirname, "./src/base"),
            "@components": join(__dirname, "./src/components"),
            "@containers": join(__dirname, "./src/containers"),
            "@hooks": join(__dirname, "./src/hooks"),
            "@redux": join(__dirname, "./src/redux"),
            "@utils": join(__dirname, "./src/utils"),
            "@types": join(__dirname, "./src/types"),
        };

        return config;
    },
};

module.exports = nextConfig;
