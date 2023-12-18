<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	let isAuthenticated = writable(false);
	let isLoading = writable(true, (set) => {
		setTimeout(() => {
			set(false);
			isAuthenticated.set(true);
		}, 1000);
	});

	setContext("auth", {
		isAuthenticated,
		isLoading
	});
</script>

<slot />
