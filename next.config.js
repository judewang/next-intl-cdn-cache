const ms = require("ms");
const withNextIntl = require("next-intl/plugin")("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    headers() {
        return [
            {
                // Cache all content pages
                source: '/((?!_next|.*\\..*).*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: [
                            `s-maxage=` + ms('1d') / 1000,
                            `stale-while-revalidate=` + ms('1y') / 1000
                        ].join(', ')
                    }
                ],

                // If you're deploying on a host that doesn't support the `vary` header (e.g. Vercel),
                // make sure to disable caching for prefetch requests for Server Components.
                missing: [
                    {
                        type: 'header',
                        key: 'Next-Router-Prefetch'
                    }
                ]
            }
        ];
    },
};

module.exports = withNextIntl(nextConfig);
