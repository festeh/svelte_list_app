<script>
	import Trend from "./Trend.svelte";
	let idxs = [1, 2, 3, 4, 5, 6];
</script>

<div class="flex flex-col bg-gray-800 rounded-2xl items-start mt-4 w-9/12 ml-4">
	<div class="p-4 font-bold text-xl"
  >Trends</div>
	{#each idxs as idx (idx)}
		<Trend />
	{/each}
</div>
