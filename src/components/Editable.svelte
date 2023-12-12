<script>
	let isEditing = false;
  export let defaultValue;
  let value = defaultValue;
</script>

{#if isEditing}
	<div class="flex-it">
		<textarea bind:value></textarea>
    <div>
    {value}
    </div>
		<button
			class="flex underline"
			on:click={() => (isEditing = false)}
		>
			Save
		</button>
	</div>
{:else}
	<button on:click={() => (isEditing = true)}>
		<slot />
	</button>
{/if}
