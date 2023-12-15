<script>
	export let href = "";
	export let text = "";
	export let icon = "";
</script>

<a
	{href}
	class="flex-it items-start w-full hover:bg-gray-800 rounded-2xl"
>
	<div class="p-3 flex-it flex-row justify-center items-center">
		<div class="flex-it icon">
			<svelte:component this={icon} />
		</div>
		<div class="text-2xl flex-it block mx-2">
			<span>
				{text}
			</span>
		</div>
	</div>
</a>
