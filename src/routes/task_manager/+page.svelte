<script>
	import AddListButton from "../../components/AddListButton.svelte";
	import TaskList from "../../components/TaskList.svelte";

	import { tasksStore } from "../../stores/tasks.js";

</script>

<div class="p-10 h-full">
	<div class="text-white text-4xl mb-4">Some List</div>
	<AddListButton />
	<div class="flex-it flex-row">
		{#each $tasksStore as item (item.id)}
			<TaskList
				name={item.text}
				items={item.items}
			/>
		{/each}
	</div>
</div>
