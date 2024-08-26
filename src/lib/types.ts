
//TODO:: Add more categories
export type Categories = 'health' | 'fitness' | 'potpourri';

export type Post = {
    title: string,
    date: string,
    excerpt: string,
    category: string,
    tags: string[],
    cover_image: string,
    banner_image: string,
    slug: string,
    read_time: string


}