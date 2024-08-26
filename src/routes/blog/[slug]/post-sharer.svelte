<script lang="ts">
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
	import FaFacebookOfficial from '~icons/fa/facebook-official';
	import FaLink from '~icons/fa/link';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	export let slug, title, href: String;
	$: copyLink = 'Copy link to clipboard';
</script>

<div class="flex flex-row items-center justify-center space-x-4">
	<Tooltip.Root openDelay={50}>
		<Tooltip.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				variant="ghost"
				on:click={() => {
					window.location.href = `https://x.com/intent/post?text=${title}&url=https://healthootopia.com/blog/${slug}`;
				}}><RiTwitterXFill /></Button
			>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Share on X</p>
		</Tooltip.Content>
	</Tooltip.Root>

	<Tooltip.Root openDelay={50}>
		<Tooltip.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				variant="ghost"
				on:click={() => {
					window.location.href = `https://www.facebook.com/sharer/sharer.php?u=https://healthootopia.com/blog/${slug}&t=${title}`;
				}}><FaFacebookOfficial /></Button
			>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Share on facebook</p>
		</Tooltip.Content>
	</Tooltip.Root>

	<div
		on:pointerleave={(e) => {
			copyLink = 'Copy link to clipboard';
		}}
	>
		<Tooltip.Root closeOnPointerDown={false} openDelay={50}>
			<Tooltip.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					variant="ghost"
					on:click={() => {
						navigator.clipboard.writeText(href);
						copyLink = 'Link Copied';
					}}><FaLink /></Button
				>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>{copyLink}</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
</div>
