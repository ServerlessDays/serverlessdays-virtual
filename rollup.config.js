import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
    input: 'src/functions/register/index.js',
    plugins: [
        resolve({
            preferBuiltins: true
        }),
        commonjs(),
        json()
    ],
    output: {
      file: 'dist/server/registerFunction.js',
      format: 'cjs',
    }
  }