<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';

	import type { Post } from '$lib/types';
	import Fade from 'embla-carousel-fade';
	import LimitWords from '$lib/utils/limitWords';

	export let data;

	let posts: Post[] = data.slice(0, 5);
</script>

<Carousel.Root
	plugins={[
		Fade(),
		Autoplay({
			delay: 3000,
			stopOnInteraction: true
		})
	]}
	opts={{
		align: 'start',
		loop: true,
		watchDrag: true
	}}
	class="h-full w-full"
>
	<Carousel.Content class="h-full w-full">
		{#each posts as post}
			<Carousel.Item class="">
				<img
					class="absolute h-full w-full object-cover brightness-50 filter backdrop-blur-sm backdrop-brightness-50"
					src={`${post.banner_image}`}
					alt={post.title}
					loading="lazy"
				/>

				<!-- <div class="relative"></div> -->
				<div class="container relative flex h-full w-full flex-col space-y-2 p-10 text-center">
					<a href={`/categories/${post.category.toLowerCase()}`}>
						<p class="font-OpenSans text-sm font-semibold uppercase tracking-widest text-white">
							{post.category}
						</p>
					</a>

					<a href={`/blog/${post.slug}`}>
						<p class="py-6 font-serif text-4xl text-white hover:cursor-pointer md:text-5xl">
							{post.title}
						</p>
					</a>

					<p class=" hidden py-6 font-sans text-lg font-light text-white md:block">
						{LimitWords(post.excerpt, 30)}
					</p>

					<a class="" href={`/blog/${post.slug}`}>
						<button
							type="button"
							class="inline-block rounded-sm border border-white px-6 py-3 text-xs font-black uppercase leading-tight tracking-widest text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
						>
							READ NOW
						</button>
					</a>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>
