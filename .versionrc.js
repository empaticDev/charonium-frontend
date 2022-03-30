const types = [
	{ type: 'feat', section: 'Features' },
	{ type: 'fix', section: 'Bug Fixes' },
	{ type: 'chore', hidden: true },
	{ type: 'docs', hidden: true },
	{ type: 'story', section: 'Storybook' },
	{ type: 'style', section: 'Styles' },
	{ type: 'refactor', hidden: true },
	{ type: 'perf', hidden: true },
	{ type: 'test', hidden: true },
]

module.exports = {
	types: types,
}
