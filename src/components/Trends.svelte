<script>
	import Trend from "./Trend.svelte";
	export let trends;
</script>

<div class="flex flex-col bg-gray-800 rounded-2xl items-start mt-4 w-7/12 ml-4">
	<div class="p-4 font-bold text-xl">Trends</div>
	{#each trends as trend (trend.id)}
		<Trend
			topic={trend.topic}
			category={trend.category}
			glides={trend.glides}
		/>
	{/each}
</div>
