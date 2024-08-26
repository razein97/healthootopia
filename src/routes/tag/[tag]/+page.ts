import type { PageLoad } from '../$types';
import searchJson from '/src/search.json';

export const load = (async ({ params }) => {

    const tag = params.tag ?? '';



    const posts = [];

    if (tag.length > 0) {
        const tagSlug = tag.replace("-", " ");
        searchJson.map((post: { tags: string[]; }) => {
            if (
                post.tags.includes(tagSlug)
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