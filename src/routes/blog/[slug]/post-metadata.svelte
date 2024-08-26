<script lang="ts">
	export let metadata;
	export let read_time;
</script>

<div class="flex flex-col items-center space-y-4">
	<br />
	<a href={`/categories/${metadata.category.toLowerCase()}`}>
		<h3
			class="font-xs text-center font-sans text-sm font-semibold uppercase text-[#ca9b52cc] hover:cursor-pointer"
		>
			{metadata.category}
		</h3>
	</a>

	<h3 class="text-center font-serif text-3xl">
		{metadata.title}
	</h3>

	<div class="flex flex-row space-x-2 text-center font-serif text-sm tracking-wide">
		<div class=" italic">
			{metadata.date}
		</div>
		<p>|</p>
		<div class="italic">
			{read_time} min read
		</div>
	</div>
</div>
