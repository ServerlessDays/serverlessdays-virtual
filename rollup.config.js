import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
    input: 'functions/register/index.js',
    plugins: [
        resolve({
            preferBuiltins: true
        }),
        commonjs()
    ],
    output: {
      file: 'dist/server/registerFunction.js',
      format: 'cjs',
    }
  }