<script lang="ts">
	import { page } from '$app/stores';
	import { title } from '$lib/config';
	import Footer from '$lib/custom_components/footer.svelte';
	import Header from '$lib/custom_components/header.svelte';
	import getRandomPost from '$lib/utils/getRandomPosts';
	import readTime from '$lib/utils/readTime';
	import type { PageData } from './$types';
	import PostMetadata from './post-metadata.svelte';
	import PostSharer from './post-sharer.svelte';
	import Recommendation from './recommendation.svelte';
	import Tags from './tags.svelte';

	export let data: PageData;

	let slug = $page.url.pathname.split('/').pop();

	let rand_posts = getRandomPost(data.posts, slug, data.meta.category, 3);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content={data.meta.tags} />
	<meta name="description" content={data.meta.excerpt} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={`${$page.url.origin}${data.meta.cover_image}`} />
	<meta charSet="utf-8" />
	<link rel="icon" href="/favicon.ico" />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div>
	<Header />
	<div class="mx-auto my-0 flex flex-col md:py-6 lg:w-full xl:w-[1080px] 2xl:w-[1080px]">
		<div class="flex flex-col items-center p-6">
			<div class="h-60 w-full justify-self-center md:h-[540px] md:w-full">
				<img
					src={data.meta.banner_image}
					alt={data.meta.title}
					class="h-full w-full rounded-sm object-cover"
				/>
			</div>

			<PostMetadata read_time={data.read_time.toString()} metadata={data.meta} />

			<br />
			<PostSharer {slug} title={data.meta.title} href={$page.url.href} />

			<br />

			<div
				class="prose justify-self-center text-justify font-sans dark:prose-invert md:prose-lg prose-headings:font-serif prose-img:rounded-sm"
			>
				<svelte:component this={data.content} />
			</div>
		</div>
	</div>

	<!-- Tags -->
	<div Class="flex w-full flex-wrap justify-center gap-4 p-4">
		{#each data.meta.tags as tag}
			<Tags {tag} />
		{/each}
	</div>

	<!-- recommendation -->
	<div class="flex flex-col p-4">
		<hr />
		<br />
		<p class="text-center font-sans text-sm font-semibold tracking-[.30em]">YOU MAY ALSO LIKE</p>
		<br />
		<hr />

		<div
			class="mx-auto flex w-full flex-col items-center md:flex-row md:justify-evenly md:space-x-4 xl:w-[1080px] 2xl:w-[1080px]"
		>
			{#each rand_posts as rand_post}
				<Recommendation post={rand_post} />
				<hr class="md:hidden" />
			{/each}
		</div>
	</div>

	<Footer />
</div>
