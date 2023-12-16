<script>
	import { beforeUpdate, onMount, afterUpdate, onDestroy } from "svelte";
	let isOpen = false;

	onMount(() => {
		addEventListener("click", () => {
			isOpen = false;
		});
		return () => {
			removeEventListener("click", () => {
				isOpen = false;
			});
		};
	});
</script>

{#if isOpen}
	<div
		class="
  flex flex-row justify-between w-full items-center p-2 rounded-2xl
  hover:bg-gray-800"
	>
		Logout
	</div>
{:else}
	<button
		class=""
		on:click|stopPropagation={() => (isOpen = true)}
	>
		<slot />
	</button>
{/if}
