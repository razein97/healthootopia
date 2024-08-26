<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import type { LayoutData } from './$types';
	import Drawer from '$lib/custom_components/drawer.svelte';
	import Transition from './transition.svelte';
	import '@fontsource-variable/open-sans';
	import '@fontsource-variable/playfair-display';
	import '@fontsource/sofia';

	export let data: LayoutData;
</script>

<ModeWatcher defaultMode="light" />

<main class="!scroll-smooth" data-sveltekit-preload-data="false">
	<!-- <DrawerMenu {showUserMenu} /> -->

	<Transition url={data.url}>
		<Drawer />

		<slot />
	</Transition>
</main>
