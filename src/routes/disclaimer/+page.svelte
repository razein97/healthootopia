<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/custom_components/footer.svelte';
	import Header from '$lib/custom_components/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{'Disclaimer'}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content={'diclaimer, notice'} />
	<meta name="description" content={'Disclaimer of the website'} />
	<meta property="og:title" content={'Disclaimer'} />

	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="flex min-h-screen w-full flex-col">
	<Header />

	<div class="mx-auto my-0 p-4 lg:w-full xl:w-[1080px] 2xl:w-[1080px]">
		<div class="privacy-policy grid gap-4 p-6">
			<h1 class="font-PlayfairDisplay text-center text-3xl md:text-5xl">Disclaimer</h1>
			<h2 class=" font-PlayfairDisplay text-2xl md:text-4xl">No Medical Advice</h2>
			<p class=" font-OpenSans text-justify text-base font-light md:text-lg">
				Healthootopia does not offer medical advice. Any content accessed through healthootopia.com
				is for informational purposes only, and is not intended to cover or otherwise be used as a
				substitute for the diagnosis or treatment of any medical condition. Information provided on
				healthootopia.com should not be used during a medical emergency. Please consult your doctor
				or other qualified health care provider if you have any questions about a medical condition,
				changing your diet or commencing or discontinuing any course of treatment. Do not ignore or
				delay obtaining professional medical advice because of information accessed through or
				otherwise obtained from or on behalf of Healthootopia.
			</p>
			<h3 class="font-OpenSans text-center text-2xl font-extrabold md:text-3xl">
				CALL 911 OR YOUR DOCTOR FOR ALL MEDICAL EMERGENCIES.
			</h3>
		</div>
	</div>
	<Footer />
</div>
