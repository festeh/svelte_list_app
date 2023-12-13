<script>
	import { createEventDispatcher } from "svelte";
	let dispatch = createEventDispatcher();
	let isEditing = false;
	export let value;
</script>

{#if isEditing}
	<div class="flex-it">
		<textarea bind:value></textarea>
		<div>
			{value}
		</div>
		<button
			class="flex underline"
			on:click={() => {
				isEditing = false;
				dispatch("updated", value);
			}}
		>
			Save
		</button>
	</div>
{:else}
	<button on:click={() => (isEditing = true)}>
		<slot />
	</button>
{/if}
