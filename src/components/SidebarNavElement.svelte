<script>
	import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
	import TiGroupOutline from "svelte-icons/ti/TiGroupOutline.svelte";
	import TiCogOutline from "svelte-icons/ti/TiCogOutline.svelte";
	import TiBell from "svelte-icons/ti/TiBell.svelte";
	import TiZoomOutline from "svelte-icons/ti/TiZoomOutline.svelte";

	export let href = "";
	export let text = "";
</script>

<a {href} class="flex-it items-start w-full hover:bg-gray-800 rounded-2xl">
	<div class="p-3 flex-it flex-row justify-center items-center">
		<div class="flex-it icon">
			{#if text === "Home"}
				<TiHomeOutline />
			{:else if text === "Profile"}
				<TiGroupOutline />
			{:else if text === "More"}
				<TiCogOutline />
			{:else if text === "Notification"}
				<TiBell />
			{:else if text === "Discover"}
				<TiZoomOutline />
			{/if}
		</div>
		<div class="text-2xl flex-it block mx-2">
			<span>
				{text}
			</span>
		</div>
	</div>
</a>
