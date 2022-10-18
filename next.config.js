/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/auth/signin',
				permanent: true,
			},
		]
  },
  images: {
    domains: ['avatars.dicebear.com'],
  },
}

module.exports = nextConfig
