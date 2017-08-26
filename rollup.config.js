const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  plugins: [],
  output: [
    {
      format: 'cjs',
      file: pkg['main']
    },
    {
      format: 'es',
      file: pkg['jsnext:main']
    }
  ]
};