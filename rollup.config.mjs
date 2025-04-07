import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

export default [
    // Main bundle
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'esm',
                sourcemap: true,
                banner: "'use client';\n",
            },
        ],
        external: ['react', 'react-dom'],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationDir: 'dist',
                exclude: ["**/*.test.tsx", "**/*.test.ts"],

            }),
            postcss({
                config: {
                    path: './postcss.config.js',
                },
                extensions: ['.css'],
                minimize: true,
                modules: {
                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                },
                extract: 'index.css',
                use: ['sass'],
            }),
            url({
                include: ['**/*.otf'],
                limit: Infinity,
                fileName: '[dirname][name][extname]',
            }),
            resolve(),
            commonjs(),
            terser({
                format: {
                    comments: /^\s*('use client'|"use client");/,
                },
                compress: {
                    directives: false,
                },
            }),
            copy({
                targets: [
                    { src: 'fonts/*', dest: 'dist/fonts' }
                ]
            })
        ],
    },

    // Font-only CSS bundle
    {
        input: 'src/fonts-entry.js', // We'll create this file
        output: {
            file: 'dist/fonts.js',
            format: 'esm',
        },
        plugins: [
            postcss({
                include: ['src/fonts.css'],
                extract: 'fonts.css',
                minimize: true,
            }),
            copy({
                targets: [
                    { src: 'fonts/*', dest: 'dist/fonts' }
                ]
            })
        ]
    }
];