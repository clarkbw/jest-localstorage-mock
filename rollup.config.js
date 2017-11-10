import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/setup.js',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          'env',
          {
            targets: {
              node: '6.11.3',
            },
            modules: false,
          },
        ],
      ],
      plugins: ['external-helpers'],
    }),
  ],
  output: {
    file: 'dist/setup.js',
    format: 'cjs',
    sourcemap: true,
  },
};
