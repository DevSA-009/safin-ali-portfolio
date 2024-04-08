import nextMDX  from '@next/mdx';
import rehypePrettyCode from "rehype-pretty-code";

const rehypeOptn = {
	theme:'github-dark-default',
	defaultLang:'typescript'
};

const withMDX = nextMDX({
	options:{
		remarkPlugins:[],
		rehypePlugins: [[rehypePrettyCode,rehypeOptn]],
	}
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
			},

		],
	},
	pageExtensions:['jsx','js','ts','tsx','mdx'],
	reactStrictMode: false
};

export default withMDX(nextConfig);
