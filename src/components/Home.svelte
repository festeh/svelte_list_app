<script>
	import NewGlide from "./NewGlide.svelte";
	import Posts from "./Posts.svelte";
	import { myAvatar } from "$lib/index.js";

	let glides = [];

	function addGlide(event) {
		const newGlide = {
			id: new Date().getTime(),
			username: "Dima",
			text: event.detail.text,
			avatar: myAvatar,
			likes: 0,
			comments: 0
		};
		glides = [...glides, newGlide];
	}
</script>

<div class="flex flex-col">
	<div class="text-lg p-4 font-bold">Home</div>
	<NewGlide on:newGlide={addGlide} />
	<Posts {glides} />
</div>
