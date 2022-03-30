/**
 * @param {String} block
 * @param {Object} [presetOptions]
 * @param {String} [presetOptions.namespace]
 * @returns {RegExp}
 */

const prettierConfig = require('./.prettierrc.json')

const customBemSelector = (block, presetOptions) => {
	const ns =
		presetOptions && presetOptions.namespace
			? `${presetOptions.namespace}-`
			: ''
	const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*'
	const element = `(?:__${WORD})?`
	const modifier = `(?:--${WORD}){0,2}`
	const attribute = '(?:\\[.+\\])?'
	return new RegExp(`^\\.${ns}${block}${element}${modifier}${attribute}$`)
}

module.exports = {
	extends: [
		'stylelint-config-recommended',
		'stylelint-config-recommended-scss',
		'stylelint-config-css-modules',
		'stylelint-prettier/recommended',
	],
	plugins: ['stylelint-prettier', 'stylelint-selector-bem-pattern'],
	rules: {
		'prettier/prettier': true,
		'unit-allowed-list': ['em', 'rem', '%', 'ch', 'vh', 'vw', 's'],
		indentation: 'tab',
		'selector-class-pattern': null,
		'plugin/selector-bem-pattern': {
			preset: 'bem',
			componentSelectors: customBemSelector,
		},
		'scss/function-no-unknown': [
			true,
			{
				ignoreFunctions: ['str-replace'],
			},
		],
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'extends',
					'apply',
					'components',
					'utilities',
					'screen',
					'layer',
				],
			},
		],
	},
}

//implicitComponents: ['components/**/*.scss'],
//componentName: /^[a-zA-Z0-9]+$/,
