const path = require('path');

const formatCommand = (filenames) => {
	const fixables = filenames.map((f) => path.relative(process.cwd(), f)).join(' ');

	return `npm run format ${fixables}`;
};

const lintCommand = (filenames) => {
	const fixables = filenames.map((f) => `--file ${path.relative(process.cwd(), f)}`).join(' ');

	return `npm run lint -- ${fixables}`;
};

module.exports = {
	'*': [formatCommand],
	'*.{js,jsx,ts,tsx}': [lintCommand]
};
