<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen flex-col items-center justify-center text-center">
	<img src="/images/undraw_taken_re_yn20.svg" width="120" height="120" alt="not found" />

	<br />
	<p class="mt-6 font-sans">
		{$page.status} | {$page.status == 404
			? 'Sorry, the page does not exist!'
			: 'Please reload and try again.'}
	</p>
</div>
