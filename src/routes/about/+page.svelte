<script lang="ts">
	import type { PageData } from './$types';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import IcRoundMail from '~icons/ic/round-mail';

	import Footer from '$lib/custom_components/footer.svelte';
	import Header from '$lib/custom_components/header.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{'About me'}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" content={'about, author, doctor, practitioner, health'} />
	<meta name="description" content={'About the author'} />
	<meta property="og:title" content={'About the author'} />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="flex h-screen flex-col justify-between">
	<Header />
	<div class="mx-auto my-0 lg:w-full xl:w-[1080px] 2xl:w-[1080px]">
		<div class="grid rounded-sm bg-secondary p-6 text-center md:grid-flow-col">
			<div class="relative h-80 w-64 justify-self-center md:col-span-1 md:h-[520px] md:w-[400px]">
				<img src="/images/smrita-singh.png" class="rounded-sm object-fill" alt="Smrita Singh" />
			</div>

			<br />
			<div class=" items-center px-4">
				<h2 class="font-serif text-4xl">About Me</h2>
				<br />
				<p class="text-justify font-sans text-base font-light">
					I’m Dr. Smrita Singh, a Physician by profession. I want to empower people with the
					knowledge they need through my blog – Healthootopia, to lead a happy and healthy life.
					Everyone can find something useful here – from those that have specific health conditions
					to those who wish to simply optimize their health and performance.
				</p>
				<br />
				<br />
				<h2 class="font-serif text-2xl">Contact</h2>
				<br />
				<div class=" flex w-full flex-row items-center justify-center space-x-3">
					<a href="mailto:healthootopia@gmail.com">
						<IcRoundMail class="h-8 w-8 hover:cursor-pointer" />
					</a>

					<a href="https://www.instagram.com/healthootopia/">
						<RiInstagramLine class="h-8 w-8 hover:cursor-pointer" />
					</a>

					<a href="https://x.com/Singh_Smrita">
						<RiTwitterXFill class="h-8 w-8 hover:cursor-pointer" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</div>
