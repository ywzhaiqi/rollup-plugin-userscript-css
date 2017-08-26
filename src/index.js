import { createFilter } from 'rollup-pluginutils'
import { insertStyle } from './style.js';

function userScriptCss(options = { insert: true }) {
  const filter = createFilter(options.include || ['**/*.css'], options.exclude)

  const injectFnName = '__$styleInject'

  return {
    name: 'userscriptCss',
    intro() {
      return options.insert ? insertStyle.toString().replace(/insertStyle/, injectFnName) : '';
    },

    transform(code, id) {
      if (!filter(id)) return;

      return {
        code: (`export default ${injectFnName}(${JSON.stringify(code)});`),
        map: { mappings: '' }
      };
    }
  }
}

export default userScriptCss