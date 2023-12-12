<script>
	import TaskListHeader from './TaskListHeader.svelte';
	import TaskListItem from './TaskListItem.svelte';

	export let name = '';

	const task1 = 'Task 1';
	const task2 = 'Task 2';
	const task3 = 'Task 3';
</script>

<div class="flex-it w-80 rounded-xl border-2 border-blue-100 bg-sky-400 m-2 my-0">
	<TaskListHeader {name} />
	<div class="p-2">
		<TaskListItem task={task1} />
		<TaskListItem task={task2} />
		<TaskListItem task={task3} />
	</div>
	<button class="underline flex p-2"> + Add Task </button>
</div>
