<script lang="ts">
	import type { Post } from '$lib/types';

	import LimitWords from '$lib/utils/limitWords';

	export let data;

	let post: Post = data;
</script>

<div class="w-full self-center">
	<div class="grid gap-y-4 p-6 md:grid-flow-col">
		<div class="relative h-60 w-60 self-center justify-self-center md:col-span-1 md:h-80 md:w-80">
			<a href={`/blog/${post.slug}`}>
				<img
					class="h-full w-full rounded-sm object-cover"
					src={post.cover_image}
					alt={post.title}
					loading="lazy"
				/>
			</a>
		</div>

		<div class="grid gap-y-4 md:col-span-4 md:gap-y-4 md:p-8">
			<a href={`/categories/${post.category.toLowerCase()}`}>
				<h3
					class="font-xs text-center font-sans text-sm font-semibold uppercase text-[#ca9b52cc] hover:cursor-pointer"
				>
					{post.category}
				</h3>
			</a>
			<a href={`/blog/${post.slug}`}>
				<h3 class="text-center font-serif text-3xl hover:cursor-pointer">
					{post.title}
				</h3>
			</a>

			<div
				class="flex flex-row space-x-2 justify-self-center text-center font-serif text-sm tracking-wide"
			>
				<div class=" italic">
					{post.date}
				</div>
				<p>|</p>
				<div class="italic">
					{post.read_time} min read
				</div>
			</div>
			<p
				class={`${
					post.excerpt.length < 30 ? 'text-center' : 'text-justify'
				} font-sans text-base text-muted-foreground`}
			>
				{LimitWords(post.excerpt, 30)}
			</p>
			<br />
			<div class="w-full text-center">
				<a href={`/blog/${post.slug}`}>
					<button
						type="button"
						class="inline-block w-56 rounded-sm border border-[#ca9b52cc] px-6 py-4 text-sm font-semibold uppercase leading-tight text-[#ca9b52cc] transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
					>
						READ MORE
					</button>
				</a>
			</div>
		</div>
	</div>
</div>

<br />
<div class="mx-auto my-0 h-px w-11/12 bg-gray-300 md:w-full" />
<br />
