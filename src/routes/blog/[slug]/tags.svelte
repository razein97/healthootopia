<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	export let tag: String;
</script>

<a href={`/tag/${tag.replace(/ /g, '-')}`}>
	<Button variant="outline" class="p-2">
		<p class="font-OpenSans text-xs text-slate-400 hover:text-gray-600">
			&num;{tag}
		</p>
	</Button>
</a>
