<script>
	import AuthContext from "../contexts/AuthContext.svelte";
	import "../app.css";
</script>

<AuthContext>
	<slot />
</AuthContext>
