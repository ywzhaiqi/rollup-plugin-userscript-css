Rollup UserScript Css Plugin
============================

This [Rollup](http://rollupjs.org/) plugin will import css file for Greasemonkey / Tampermonkey.

## Install

```
npm install --save rollup-plugin-userscript-css
```

## usage

```js
import './test.css'
```

`rollup.config.js`

```js
import userScriptCss from 'rollup-plugin-userscript-css'

export default {
  ...
  plugins: [
    userScriptCss()
  ]
}
```

## Options

### insert

+ Default: `true`
+ Type: `Boolean`

Default `true`, the plugin will insert CSS into `<head/>` tag.

### include

+ Default: `[ '**/*.css' ]`

+ Type: `String|Array`

Minimatch pattern or array of minimatch patterns to determine which files are transpiled by the plugin.

### exclude

+ Default: `node_modules/**`

+ Type: `String|Array`

Minimatch pattern or array of minimatch patterns to determine which files are explicitly not transpiled by the plugin, overrules the `include` option.

## References

- [index.js at master · xiaofuzi/rollup-plugin-less](https://github.com/xiaofuzi/rollup-plugin-less/blob/master/src/index.js)