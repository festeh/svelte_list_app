<script>
	import SidebarHeader from "./SidebarHeader.svelte";
	import SidebarNav from "./SidebarNav.svelte";
	import SidebarSend from "./SidebarSend.svelte";
</script>

<header>
	<div class="flex flex-row items-end justify-center">
		<div class="w-6/12">
			<SidebarHeader />
			<SidebarNav />
			<SidebarSend />
		</div>
	</div>
</header>
