<script lang="ts">
	import Carousel from '$lib/custom_components/carousel.svelte';
	import Header from '$lib/custom_components/header.svelte';
	import type { PageData } from './$types';
	import * as config from '$lib/config';
	import Post from '$lib/custom_components/post.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { onMount } from 'svelte';
	import Footer from '$lib/custom_components/footer.svelte';

	export let data: PageData;
	$: posts = [];

	let count = 0;
	onMount(() => {
		addMore(count);
	});

	function addMore(last: number) {
		let total_post = data.posts.length;

		let toAdd = 0;
		if (last + 10 <= total_post) {
			toAdd = last + 10;
		} else {
			toAdd = total_post;
		}

		for (let i = last; i < toAdd; i++) {
			posts.push(data.posts[i]);
		}
		count = toAdd;
	}

	let element;
</script>

<svelte:head>
	<title>{config.title}</title>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="keywords"
		content={'health,healthy,healthy habits,gut health,health tips,how to be healthy,healthy lifestyle,mental health,global health,healthy diet,samantha hacks,global health ipo,healthy eating,healthy routine,healthy recipes,10 healthy habits,samantha issues,mental awareness,how more healthy,wealth,skin band,samantha condition,health foods,health goals,0.01% health,public sector, fitness,fitness video,popsugar music 2022,fitness motivation,female fitness motivation 2022,la fitness,eva tips,fitness fails,planet friday,cycling over 50s,fitness blender,trakbar channel,fitness routine,apple fitness+,fitness mistakes,apple app,finesse,fitness challenge,apple plus,my journey,fitness tips for men,fitness influencers,fitness,healthy lifestyle,lifestyle,health,health and wellness lifestyle,how start a lifestyle,fitness lifestyle,health fitness,healthy food,fitness lifestyle,the lifestyle motivation,healthy tips,health channel,the 2020,health in english,healthy english lesson,health travel,health,fitness,health fitness,health care,health journey,healthy journal,fitness tips,6 week challenge,healthy,fitness youtuber,how bullet journal fitness,how your habits,fitness motivation,how become self disciplined wellness,fitness results,home'}
	/>
	<meta
		name="description"
		content={"Health, Fitness, Lifestyle. A rendezvous for all that's good for you."}
	/>
	<meta property="og:title" content={'Healthootopia - Learn . Nurture . Love'} />
	<meta property="og:url" content={'https://healthootopia.com'} />
	<link rel="icon" href="/favicon.ico" />
	<link rel="canonical" href={'https://healthootopia.com'} />
</svelte:head>

<div class="flex flex-col items-center">
	<Header />
	<div class="flex w-full self-center xl:w-[1080px] 2xl:w-[1080px]">
		<Carousel data={data.posts} />
	</div>
	<div
		class="h-2/5 w-full flex-1 items-center justify-center pb-14 md:py-1 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px]"
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
</div>
<Footer />
