const rollup = require('rollup')
const userScriptCss = require('../dist/rollup-plugin-userscript-css')

console.log(userScriptCss)

async function test() {
  const inputOptions = {
    input: './fixtures/hello.js',

    plugins: [
      userScriptCss()
    ]
  }

  const outputOptions = {
    file: './test-dist.js',
    format: 'iife',
  }

  const bundle = await rollup.rollup(inputOptions);

  // console.log(bundle.imports); // an array of external dependencies
  // console.log(bundle.exports); // an array of names exported by the entry point
  // console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // // or write the bundle to disk
  // await bundle.write(outputOptions);
  console.log(code)
}

test()