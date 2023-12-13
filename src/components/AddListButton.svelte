<script>
	import { tasksStore } from "../stores/tasks.js";
</script>

<button
	on:click={() => {
		tasksStore.addList();
	}}
	class="font-bold text-white text-2xl hover:underline cursor-pointer flex items-start mb-3"
>
	+ Add List
</button>
