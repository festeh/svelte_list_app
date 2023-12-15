<script>
	import Trend from "./Trend.svelte";
	const random = () => Math.floor(Math.random() * (1999 - 199 + 1)) + 100;
	let trends = [
  { id: 1, topic: "Europe", category: "Gas Prices", glides: random() },
  {id : 2, topic: "Crypto", category: "LET'S GO BTC", glides: random() },
  {id : 3, topic: "Games", category: "GTA 6", glides: random() },
  {id : 4, topic: "Movies", category: "The Matrix 4", glides: random() },
  {id : 5, topic: "Music", category: "Taylor Swift", glides: random() },
  {id : 6, topic: "Sports", category: "NBA", glides: random() },
  ];
</script>

<div class="flex flex-col bg-gray-800 rounded-2xl items-start mt-4 w-7/12 ml-4">
	<div class="p-4 font-bold text-xl">Trends</div>
	{#each trends as trend (trend.id)}
		<Trend topic={trend.topic} category={trend.category} glides={trend.glides} />
	{/each}
</div>
