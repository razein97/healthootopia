import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

//**@type {import{'mdsvex}.MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx', '.html', '.js', '.svelte'],
	// layout: {
	// 	_: '/src/mdsvex.svelte'
	// },
	remarkPlugins: [remarkUnwrapImages, remarkToc],
	rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svx', '.md', '.svelte'],
	kit: {
		adapter: adapter()
	},

	alias: {
		"@/*": "./path/to/lib/*",
	},
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};
export default config;
