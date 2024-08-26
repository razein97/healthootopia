<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Sheet from '$lib/components/ui/sheet';
	import SheetHeader from '$lib/components/ui/sheet/sheet-header.svelte';
	import { drawer } from '$lib/stores/all_stores';
	import IcOutlineSearch from '~icons/ic/outline-search';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { CaretDown, CaretUp, ListBullet } from 'svelte-radix';

	let search_value = '';
	let collapsibleOpen = false;
</script>

<Sheet.Root
	open={$drawer}
	onOpenChange={(e) => {
		drawer.set(e);
		collapsibleOpen = e;
	}}
	onOutsideClick={() => {
		// drawer.set(false);
		collapsibleOpen = false;
	}}
>
	<Sheet.Content class="flex flex-col space-y-1 border-none bg-secondary">
		<div class="flex flex-row items-center justify-center space-x-2">
			<form
				class="flex h-10 w-full max-w-sm items-center space-x-2 rounded-md border border-primary bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
				on:submit={(e) => {
					if (search_value.length > 0) {
						window.location.href = '/search?q=' + search_value;
						// setTimeout(() => {
						// 	goto('/search>q=' + search_value, { replaceState: true, invalidateAll: true });
						// 	drawer.set(false);
						// }, 0);
					}
				}}
			>
				<IcOutlineSearch class="h-8 w-8" />
				<Input
					type="text"
					bind:value={search_value}
					class="focus:none m-0 h-full border-none p-0 shadow-none focus-visible:ring-0"
					placeholder="Search posts"
				/>

				<Button class="hidden" type="submit">Search</Button>
			</form>
		</div>

		<!-- category -->

		<Collapsible.Root
			onOpenChange={(e) => {
				collapsibleOpen = e;
			}}
			class="flex flex-col"
		>
			<Collapsible.Trigger>
				<div class="flex flex-row justify-between rounded-sm border border-primary p-2">
					<ListBullet />
					<p>Categories</p>
					{#if collapsibleOpen}
						<CaretUp />
					{:else}
						<CaretDown />
					{/if}
				</div>
			</Collapsible.Trigger>
			<Collapsible.Content class="flex flex-col space-y-2">
				<span />
				<Button
					on:click={() => {
						goto('/categories/health');
						drawer.set(false);
					}}>Health</Button
				>
				<Button
					on:click={() => {
						goto('/categories/fitness');
						drawer.set(false);
					}}>Fitness</Button
				>
				<Button
					on:click={() => {
						goto('/categories/potpourri');
						drawer.set(false);
					}}>Potpourri</Button
				>
			</Collapsible.Content>
		</Collapsible.Root>

		<!-- about me -->

		<Button
			variant="secondary"
			class="h-10 border border-primary"
			on:click={() => {
				goto('/about');
				drawer.set(false);
			}}>About me</Button
		>
	</Sheet.Content>
</Sheet.Root>
