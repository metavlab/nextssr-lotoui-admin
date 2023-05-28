/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const nextConfig = {
    experimental: {
        // esmExternals: false,
        // jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
    },
    webpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
        }
        return config
    }
};

module.exports = nextConfig;
