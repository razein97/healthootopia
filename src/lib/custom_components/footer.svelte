<script>
	import Button from '$lib/components/ui/button/button.svelte';

	const curYear = new Date().getFullYear();
</script>

<footer class=" bottom-0 right-0 top-[100vh] h-12 w-full bg-secondary">
	<div
		class="mx-auto list-item flex-col items-baseline justify-between md:flex md:flex-row md:justify-between md:p-4 lg:w-full xl:w-[1080px] 2xl:w-[1080px]"
	>
		<p class="text-center text-xs font-light md:justify-start">
			Copyright © {curYear} Smrita Singh | Healthootopia, All Rights Reserved
		</p>

		<div class="flex flex-row justify-center gap-x-3 md:justify-end">
			<a href="/privacy-policy" class="hover:underline">
				<p class="text-[10px]">Privacy Policy</p>
			</a>

			<a href="/terms" class="hover:underline">
				<p class="text-[10px]">Terms</p>
			</a>

			<a href="/disclaimer" class="hover:underline">
				<p class="text-[10px]">Disclaimer</p>
			</a>
		</div>
	</div>
</footer>
