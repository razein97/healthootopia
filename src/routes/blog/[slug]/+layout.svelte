<script lang="ts">
	import Drawer from '$lib/custom_components/drawer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Drawer />
<slot />
