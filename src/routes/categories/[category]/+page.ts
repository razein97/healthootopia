import type { PageLoad } from '../$types';
import searchJson from '/src/search.json';

export const load = (async ({ params }) => {

    const category = params.category ?? '';

    const posts = [];

    if (category.length > 0) {
        searchJson.map((post: { category: string; }) => {
            if (
                post.category.toLowerCase() === category
            ) {
                posts.push(post);
            } else {
                posts.push(null);
            }
        });

        let filteredPosts = posts.filter((path) => {
            return path && path;
        });

        filteredPosts = filteredPosts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())


        return { filteredPosts };
    }
}) satisfies PageLoad;