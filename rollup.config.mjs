import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    external: ['react', 'react-dom'],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist',
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
        terser(),
        copy({
            targets: [
                { src: 'fonts/*', dest: 'dist/fonts' }
            ]
        })
    ],
};