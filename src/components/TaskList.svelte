<script>
	import TaskListHeader from './TaskListHeader.svelte';
	import TaskListItem from './TaskListItem.svelte';
</script>

<div class="flex-it w-80 rounded-xl border-2 border-blue-100 bg-sky-400 m-2 my-0">
	<TaskListHeader />
	<TaskListItem />
	<button class="underline flex p-2"> + Add Task </button>
</div>
