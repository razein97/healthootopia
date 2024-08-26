<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import Footer from '$lib/custom_components/footer.svelte';
	import Header from '$lib/custom_components/header.svelte';
	import Post from '$lib/custom_components/post.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { beforeUpdate, onMount } from 'svelte';

	export let data: PageData;

	let myParameter = null;
	beforeUpdate(() => {
		myParameter = $page.url.searchParams.get('q');
	});

	let title = capitalizeFirstLetter($page.url.pathname.split('/').at(-1) ?? '');
	function capitalizeFirstLetter(string: string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	$: posts = [];

	let count = 0;
	onMount(() => {
		addMore(count);
	});

	function addMore(last: number) {
		let total_post = data.filteredPosts.length;

		let toAdd = 0;
		if (last + 10 <= total_post) {
			toAdd = last + 10;
		} else {
			toAdd = total_post;
		}

		for (let i = last; i < toAdd; i++) {
			posts.push(data.filteredPosts[i]);
		}
		count = toAdd;
	}

	let element;
</script>

<svelte:head>
	<title>{'Category-' + title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content={title} />
	<meta name="description" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:url" content={$page.url.href} />

	<meta charSet="utf-8" />
	<link rel="icon" href="/favicon.ico" />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="flex min-h-screen w-full flex-col">
	<Header />

	{#if posts !== undefined && posts.length > 0 && posts}
		{#key $page.url.href}
			<div
				class="h-2/5 w-full flex-1 self-center md:py-6 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px]"
			>
				{#each posts as post, i}
					{#if i === count - 1}
						<IntersectionObserver
							{element}
							threshold={0.5}
							on:intersect={(e) => {
								addMore(count);
							}}
						>
							<div bind:this={element}><Post data={post} /></div>
						</IntersectionObserver>
					{:else}
						<Post data={post} />
					{/if}
				{/each}
			</div>
		{/key}
	{:else}
		<div
			class="h-full w-full flex-1 flex-col md:py-6 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px]"
		>
			<div class="absolute top-1/2 w-full -translate-y-1/2 text-center">
				<p class="font-sans text-lg font-bold opacity-75">
					{#if myParameter !== null}
						No posts found related to "{myParameter}."
					{:else}
						No posts found.
					{/if}
				</p>
			</div>
		</div>
	{/if}

	<Footer />
</div>
