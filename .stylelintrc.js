/**
 * @param {String} block
 * @param {Object} [presetOptions]
 * @param {String} [presetOptions.namespace]
 * @returns {RegExp}
 */
const bemSelector = (block, presetOptions) => {
  const ns = (presetOptions && presetOptions.namespace) ? `${presetOptions.namespace}-` : '';
  const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
  const element = `(?:__${WORD})?`;
  const modifier = `(?:--${WORD}){0,2}`;
  const attribute = '(?:\\[.+\\])?';
  return new RegExp(`^\\.${ns}${block}${element}${modifier}${attribute}$`);
}

module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recommended-scss','stylelint-config-css-modules','stylelint-config-prettier'],
  plugins: [
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'unit-allowed-list': ["em", "rem", "%", "ch","vh","vw","s"],
    'indentation': 'tab',
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      componentSelectors: bemSelector
    }
  }
}