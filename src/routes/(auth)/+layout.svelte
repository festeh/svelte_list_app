<script>
	import { getAuthContext } from "../../contexts/AuthContext";
	let { isAuthenticated, isLoading } = getAuthContext();
	import { goto } from "$app/navigation";

	if ($isAuthenticated) {
		goto("/");
	}
</script>

{#if !$isAuthenticated}
	<slot />
{/if}
