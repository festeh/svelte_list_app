<script>
	import Sidebar from "../../components/Sidebar.svelte";
	import Trends from "../../components/Trends.svelte";

	export let data;

	let { isAuthenticated, isLoading } = getAuthContext();
	import { getAuthContext } from "../../contexts/AuthContext.js";
	import Loader from "@components/Loader.svelte";
</script>

{#if $isLoading && !$isAuthenticated}
	<Loader size={28}/>
{:else}
	<div class="flex-it flex-row text-white w-full h-full justify-center">
		<div class="flex w-2/12">
			<Sidebar />
		</div>
		<div class="w-3/12 border-x border-gray-700">
			<slot />
		</div>
		<div class="w-2/12">
			<Trends trends={data.trends} />
		</div>
	</div>
{/if}
