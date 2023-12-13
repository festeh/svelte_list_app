<script>
	import TaskListHeader from "./TaskListHeader.svelte";
	import TaskListItem from "./TaskListItem.svelte";

	export let list;
	export let listIdx = 0;

	import { tasksStore } from "../stores/tasks.js";
</script>

<div class="flex-it w-80 h-full min-h-full rounded-xl m-2 my-0">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		on:dragover|preventDefault
		on:drop={(event) => {
			const data = JSON.parse(event.dataTransfer.getData("text/plain"));
			tasksStore.moveTask(data, listIdx);
		}}
		class="bg-sky-500 rounded-xl border-2 border-blue-300 flex-it max-h-full"
	>
		<TaskListHeader name={list.text} />
		<div class="p-2 overflow-x-hidden overflow-y-auto with-scrollbar">
			{#each list.items as task, taskIdx (task.id)}
				<TaskListItem
					{task}
					{listIdx}
					{taskIdx}
				/>
			{/each}
		</div>
		<button
			on:click={() => {
				tasksStore.addTask(listIdx);
			}}
			class="underline flex p-2"
		>
			+ Add Task
		</button>
	</div>
</div>
