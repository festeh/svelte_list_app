<script>
	import Profile from "./Profile.svelte";
	import SidebarHeader from "./SidebarHeader.svelte";
	import SidebarNav from "./SidebarNav.svelte";
	import SidebarSend from "./SidebarSend.svelte";
</script>

<div class="flex flex-row items-start justify-end mr-8 flex-grow">
		<div class="flex flex-col h-full">
			<SidebarHeader />
			<SidebarNav />
			<SidebarSend />
			<Profile />
		</div>
</div>
