import { createFilter } from 'rollup-pluginutils'
import { insertStyle } from './style.js';

function userScriptCss(options = {}) {
  if (typeof options.insert === 'undefined') {
    options.insert = true;
  }

  const filter = createFilter(options.include || ['**/*.css'], options.exclude || 'node_modules/**')

  const injectFnName = '__$styleInject'

  return {
    name: 'userscriptCss',
    intro() {
      return options.insert ? insertStyle.toString().replace(/insertStyle/, injectFnName) : '';
    },

    transform(code, id) {
      if (!filter(id)) return;

      let exportCode = '';

      if (options.insert != false) {
        exportCode = `export default ${injectFnName}(${JSON.stringify(code)});`;
      } else {
        exportCode = `export default ${JSON.stringify(code.toString())};`
      }

      return {
        code: exportCode,
        map: { mappings: '' }
      };
    }
  }
}

export default userScriptCss