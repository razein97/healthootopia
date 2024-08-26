<script lang="ts">
	import '../app.css';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Moon, Sun } from 'svelte-radix';
	import type { LayoutData } from './$types';
	import Header from '$lib/custom_components/header.svelte';
	import { Button } from '$lib/components/ui/button';
	import Drawer from '$lib/custom_components/drawer.svelte';
	import Transition from './transition.svelte';
	import Footer from '$lib/custom_components/footer.svelte';

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
