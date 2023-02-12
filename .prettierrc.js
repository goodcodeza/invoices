/** @type {import('prettier').Config} */
module.exports = {
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss' // MUST COME LAST - https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
	],
	pluginSearchDirs: false,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	useTabs: true,
	// -- @trivago/prettier-plugin-sort-imports options
	importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
};
