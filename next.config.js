/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		reactRemoveProperties: true
	},
	experimental: {
		appDir: true
	}
};

module.exports = nextConfig;
