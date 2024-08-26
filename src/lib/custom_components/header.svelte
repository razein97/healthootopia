<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Input } from '$lib/components/ui/input/index.js';
	import { drawer } from '$lib/stores/all_stores';

	import { fade } from 'svelte/transition';

	import IcOutlineSearch from '~icons/ic/outline-search';
	import IcRoundClose from '~icons/ic/round-close';
	import IcRoundMenu from '~icons/ic/round-menu';
	// export let data;

	let search_bar = false;
	let search_value = '';
</script>

<header class="h-14 w-full bg-secondary p-2 drop-shadow">
	<div class="mx-auto items-center xl:w-[1080px] 2xl:w-[1080px]">
		{#if search_bar}
			<div
				in:fade={{ delay: 100, duration: 300 }}
				class="flex h-full w-full flex-row items-center justify-center space-x-2"
			>
				<form
					class="flex h-10 w-full max-w-sm items-center space-x-2 rounded-md border border-primary bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
					on:submit={(e) => {
						if (search_value.length > 0) {
							window.location.href = '/search?q=' + search_value;
							// goto('/search?q=' + search_value);
							// setTimeout(
							// 	() =>
							// 		goto('/search/' + search_value, { replaceState: true, invalidateAll: true }),
							// 	0
							// );
						}
					}}
				>
					<IcOutlineSearch class="h-8 w-8" />
					<Input
						type="text"
						autofocus
						bind:value={search_value}
						class="focus:none m-0 h-full border-none p-0 shadow-none focus-visible:ring-0"
						placeholder="Search posts"
					/>

					<Button class="hidden" type="submit">Search</Button>
				</form>
				<Button
					class="h-10"
					on:click={() => {
						search_bar = false;
					}}
				>
					<IcRoundClose class="h-6 w-6" />
				</Button>
			</div>
		{:else}
			<div in:fade={{ delay: 100, duration: 300 }} class="m-auto flex h-full flex-row">
				<div class=" flex flex-row items-center md:w-1/3">
					<a href="/">
						<div
							class="relative h-10 w-10 cursor-pointer opacity-75 transition hover:opacity-100 md:h-10 md:w-10"
						>
							<img src={'/images/logo.webp'} alt="Healthootopia" loading="lazy" />
						</div>
					</a>

					<div class="flex flex-col justify-center">
						<a href="/">
							<p class="pl-2 font-cursive text-lg hover:cursor-pointer md:text-xl">Healthootopia</p>
						</a>
						<a href="/">
							<p class="pl-2 font-sans text-xs hover:cursor-pointer md:text-xs">
								Learn . Nurture . Love
							</p>
						</a>
					</div>
				</div>

				<span class="flex flex-auto" />

				<div class={`hidden grid-flow-col flex-row space-x-2 md:grid`}>
					<DropdownMenu.Root loop={true}>
						<DropdownMenu.Trigger asChild let:builder>
							<Button builders={[builder]} variant="ghost"
								><p class="text-sm font-semibold">Categories</p></Button
							>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Group>
								<DropdownMenu.Item
									on:click={() => {
										goto('/categories/health');
									}}>Health</DropdownMenu.Item
								>
								<DropdownMenu.Item
									on:click={() => {
										goto('/categories/fitness');
									}}>Fitness</DropdownMenu.Item
								>
								<DropdownMenu.Item
									on:click={() => {
										goto('/categories/potpourri');
									}}>Potpourri</DropdownMenu.Item
								>
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>

					<Button class="" variant={'ghost'} on:click={() => goto('/about')}
						><p class="text-sm font-semibold">About me</p></Button
					>

					<Button
						variant="default"
						on:click={() => {
							search_bar = true;
						}}
					>
						<IcOutlineSearch class="h-full w-full" />
					</Button>
				</div>

				<Button
					class="block p-1 md:hidden"
					variant="ghost"
					on:click={() => {
						console.log('cliked');
						drawer.set(true);
					}}
				>
					<IcRoundMenu class=" h-7 w-7 " />
				</Button>
			</div>
		{/if}
	</div>
</header>
