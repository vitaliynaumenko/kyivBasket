import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // webpack: (config) => {
    //     // Додаємо обробку SCSS/SASS
    //     config.module.rules.push({
    //         test: /\.scss$/,
    //         use: [
    //             // 'style-loader',
    //             // 'css-loader',
    //             'postcss-loader',
    //             'resolve-url-loader',
    //             {
    //                 loader: 'sass-loader',
    //                 options: {
    //                     sourceMap: true, // Важливо для resolve-url-loader
    //                 },
    //             },
    //         ],
    //     });
    //
    //     return config;
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
