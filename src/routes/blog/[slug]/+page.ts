import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Post } from '$lib/types';
import searchJson from '/src/search.json';


export const load = (async ({ params, fetch }) => {
    const response = await fetch('/api/posts')
    const posts: Post[] = await response.json()
    try {
        const post = await import(`../../../posts/${params.slug}.svx`);
        // const read_time = readTime(raw.default);
        let read_time = 0;
        searchJson.map((jsPost: { slug: string; read_time: number; }) => {
            if (jsPost.slug === params.slug) {
                read_time = jsPost.read_time;
            }
        })


        return {
            content: post.default,
            meta: post.metadata,
            posts: posts,
            read_time: read_time

        }
    } catch (e) {
        console.log(e)
        throw error(404, `Could not find ${params.slug}`)
    }



}) satisfies PageLoad;