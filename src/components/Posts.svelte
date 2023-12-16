<script>
	import Post from "./Post.svelte";
	export let glides = [];
</script>

<div class="h-full border-gray-800 border-t-2 pt-5">
	{#each glides as glide (glide.id)}
		<Post {glide} />
	{/each}
</div>
