import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.js',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
      }),
    ],
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    input: 'src/setup.js',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
      }),
    ],
    output: {
      file: 'dist/setup.js',
      format: 'cjs',
      sourcemap: true,
    },
  },
];
