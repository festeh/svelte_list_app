<script>
	import AddListButton from "../../components/AddListButton.svelte";
	import TaskList from "../../components/TaskList.svelte";

	const taskList = [
		{
			id: "l-1",
			text: "List 1",
			items: [
				{ id: "t-1", text: "Task 1" },
				{ id: "t-2", text: "Task 2" },
				{ id: "t-3", text: "Task 3" }
			]
		},
		{
			id: "l-2",
			text: "List 2",
			items: [
				{ id: "t-4", text: "Task 4" },
				{ id: "t-5", text: "Task 5" },
				{ id: "t-6", text: "Task 6" }
			]
		},
		{
			id: "l-3",
			text: "List 3",
			items: [
				{ id: "t-7", text: "Task 7" },
				{ id: "t-8", text: "Task 8" },
				{ id: "t-9", text: "Task 9" }
			]
		}
	];

	let _taskList = [];

	import { tasksStore } from "../../stores/tasks.js";

	tasksStore.subscribe((value) => {
		_taskList = value;
	});
</script>

<div class="p-10 h-full">
	<div class="text-white">
		{JSON.stringify(_taskList)}
	</div>

	<div class="text-white text-4xl mb-4">Some List</div>
	<AddListButton />
	<div class="flex-it flex-row">
		{#each taskList as item (item.id)}
			<TaskList
				name={item.text}
				items={item.items}
			/>
		{/each}
	</div>
</div>
