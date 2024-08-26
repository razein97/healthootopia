<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="h-full w-full transition" in:fade>
		<slot />
	</div>
{/key}
