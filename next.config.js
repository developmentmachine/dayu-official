/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config.js')

const nextConfig = {
    i18n,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dayu-app-1320376356.cos.ap-beijing.myqcloud.com',
            },
        ],
    },
}
module.exports = nextConfig;
