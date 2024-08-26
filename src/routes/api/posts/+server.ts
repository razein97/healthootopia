import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Post } from '$lib/types';
import readTime from '$lib/utils/readTime';
import fs from "fs";



async function getPosts() {
    let posts: Post[] = [];
    const paths = import.meta.glob('/src/posts/*.svx', { eager: true });


    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.svx', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;

            const reading_time = readTime(file.default.render().html);

            const post = {
                title: metadata.title,
                date: metadata.date,
                excerpt: metadata.excerpt,
                category: metadata.category,
                tags: metadata.tags,
                cover_image: metadata.cover_image,
                banner_image: metadata.banner_image,
                slug: slug,
                read_time: reading_time.toString()
            } satisfies Post
            posts.push(post);
        }

    }



    posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())
    return posts;

}

export const GET: RequestHandler = async () => {

    const posts = await getPosts()

    const jsonString = JSON.stringify(posts);
    fs.writeFileSync("./src/search.json", jsonString, (err) => {
        if (err) {
            console.log("Error writing file", err);
        } else {
            console.log("Successfully wrote file");
        }
    });

    return json(posts);
};