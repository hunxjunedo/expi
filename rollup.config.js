import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'

export default [
    {
        input: './index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            terser(),
            resolve()
        ]
    }
]