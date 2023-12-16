<script>
	import { page } from "$app/stores";
</script>

<div class="flex justify-center items-center h-full w-full text-white">
	<div class="flex flex-col justify-center items-center">
		<h1 class="text-8xl font-extrabold mb-5">{$page.status}</h1>
		<h2 class="text-2xl font-bold">{$page.error.message}</h2>
	</div>
</div>
