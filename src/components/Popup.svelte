<script>
	import { beforeUpdate, onMount, afterUpdate, onDestroy } from "svelte";
	import { clickOutside } from "../actions/click_outside.js";
	let isOpen = false;
	let popupContent;
	let offset = 0;

	function closePopup() {
		isOpen = false;
	}

	afterUpdate(() => {
		let height = popupContent.clientHeight;
		offset = height + "px";
	});
</script>

<div bind:this={popupContent}>
	<button
		class=""
		on:click|stopPropagation={() => (isOpen = true)}
	>
		<slot />
	</button>
</div>
{#if isOpen}
	<div
		class="
  flex text-white
  hover:bg-gray-800 bg-gray-700
  rounded-lg
  fixed
  text-xl text-bold
  p-2
  "
		style="bottom: {offset}; width: 154px"
		use:clickOutside={closePopup}
	>
		Logout
	</div>
{/if}
