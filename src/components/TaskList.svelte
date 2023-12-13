<script>
	import TaskListHeader from './TaskListHeader.svelte';
	import TaskListItem from './TaskListItem.svelte';

	export let name = '';
	export let items = [];
  export let idx = 0;
</script>

<div class="flex-it w-80 rounded-xl border-2 border-blue-100 bg-sky-400 m-2 my-0">
	<TaskListHeader {name}/>
	<div class="p-2">
		{#each items as task (task.id)}
			<TaskListItem {task} />
		{/each}
	</div>
	<button class="underline flex p-2"> + Add Task </button>
</div>
