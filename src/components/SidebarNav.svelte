<script>
	import SidebarNavElement from "./SidebarNavElement.svelte";
	import TiHomeOutline from "svelte-icons/ti/TiHomeOutline.svelte";
	import TiGroupOutline from "svelte-icons/ti/TiGroupOutline.svelte";
	import TiCogOutline from "svelte-icons/ti/TiCogOutline.svelte";
	import TiBell from "svelte-icons/ti/TiBell.svelte";
	import TiZoomOutline from "svelte-icons/ti/TiZoomOutline.svelte";

	const navElements = [
		{
			href: "/",
			text: "Home",
			icon: TiHomeOutline
		},
		{
			href: "/profile",
			text: "Profile",
			icon: TiGroupOutline
		},
		{
			href: "/",
			text: "More",
			icon: TiCogOutline
		},
		{
			href: "/",
			text: "Notification",
			icon: TiBell
		},
		{
			href: "/task_manager",
			text: "Discover",
			icon: TiZoomOutline
		}
	];
</script>

<div class="flex-it items-start">
	<nav class="flex-it items-start">
		{#each navElements as navElement}
			<SidebarNavElement
				href={navElement.href}
				text={navElement.text}
				icon={navElement.icon}
			/>
		{/each}
	</nav>
</div>
