<script>
	import AddListButton from "../../components/AddListButton.svelte";
	import TaskList from "../../components/TaskList.svelte";

	import { tasksStore } from "../../stores/tasks.js";
</script>

<div class="p-10 h-full flex-it">
	<div class="text-white text-4xl mb-4">Some List</div>
	<AddListButton />
	<div class="flex-it h-full flex-1">
		<div class="flex-it flex-row rounded-xl h-full">
			{#each $tasksStore as list, listIdx (list.id)}
				<TaskList
					{list}
					{listIdx}
				/>
			{/each}
		</div>
	</div>
</div>
