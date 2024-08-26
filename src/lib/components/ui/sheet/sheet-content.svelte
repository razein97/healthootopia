<script lang="ts">
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import Cross2 from 'svelte-radix/Cross2.svelte';
	import { fly } from 'svelte/transition';
	import {
		SheetOverlay,
		SheetPortal,
		type Side,
		sheetTransitions,
		sheetVariants
	} from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = SheetPrimitive.ContentProps & {
		side?: Side;
	};

	let className: $$Props['class'] = undefined;
	export let side: $$Props['side'] = 'right';
	export { className as class };
	export let inTransition: $$Props['inTransition'] = fly;
	export let inTransitionConfig: $$Props['inTransitionConfig'] =
		sheetTransitions[side ?? 'right'].in;
	export let outTransition: $$Props['outTransition'] = fly;
	export let outTransitionConfig: $$Props['outTransitionConfig'] =
		sheetTransitions[side ?? 'right'].out;
</script>

<SheetPortal>
	<SheetOverlay />
	<SheetPrimitive.Content
		{inTransition}
		{inTransitionConfig}
		{outTransition}
		{outTransitionConfig}
		class={cn(sheetVariants({ side }), className)}
		{...$$restProps}
	>
		<SheetPrimitive.Close
			class="right-4 flex h-8 w-8 flex-col items-center self-end rounded-sm bg-primary  ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
		>
			<Cross2 class="my-auto h-6 w-6 text-background" />
			<span class="sr-only">Close</span>
		</SheetPrimitive.Close>
		<slot />
	</SheetPrimitive.Content>
</SheetPortal>
