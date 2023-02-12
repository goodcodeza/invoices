/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
	overrides: [
		{
			extends: ['plugin:jest/recommended'],
			files: ['__tests__/**'],
			plugins: ['jest'],
			rules: {}
		}
	]
};
