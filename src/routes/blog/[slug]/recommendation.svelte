<script lang="ts">
	import LimitWords from '$lib/utils/limitWords';

	export let post;

	let length = 30;
	let title = post.title.length > length ? post.title.substring(0, length - 3) + '...' : post.title;
</script>

<div class="py-4">
	<div class="flex flex-row md:flex-col">
		<div class="flex flex-col items-center">
			<a href={`/blog/${post.slug}`}>
				<img
					class="h-20 w-20 object-cover md:h-40 md:w-60"
					src={post.cover_image}
					alt={post.title}
				/>
			</a>
		</div>
		<br />

		<div class="w-3/4 self-center p-2 md:w-full">
			<a href={`/blog/${post.slug}`}>
				<button class="w-full">
					<h3
						class="line-clamp-2 truncate text-center font-serif text-sm font-semibold md:text-base"
					>
						{title}
					</h3>
				</button>
			</a>

			<div class="text-center font-serif text-sm italic md:text-sm">
				{post.date} <br />
				{post.read_time} min read
			</div>
		</div>
	</div>
</div>
