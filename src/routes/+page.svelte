<script>
	import Home from "../components/Home.svelte";
	import Sidebar from "../components/Sidebar.svelte";
	import Trends from "../components/Trends.svelte";
</script>

<div class="flex-it flex-row text-white w-full h-full">
	<div class="w-2/12 flex-grow items-end">
		<Sidebar />
	</div>
	<div class="flex-grow w-6/12 border-x border-gray-700">
		<Home />
	</div>
	<div class="w-3/12 flex-grow">
		<Trends />
	</div>
</div>
