<script>
	import TrashBin from "./TrashBin.svelte";
	import Editable from "./Editable.svelte";

	import { tasksStore } from "../stores/tasks.js";

	export let task;
	export let listIdx;
  export let taskIdx;

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex-it border border-solid rounded-xl cursor-grab bg-sky-500 p-2 mb-2"
	draggable="true"
  on:dragstart={(event) => {
    event.dataTransfer.setData("text/plain", JSON.stringify({ task, listIdx, taskIdx }));
  }}
>
	<Editable
		value={task.text}
		on:updated={(event) => {
			const idx = $tasksStore[listIdx].items.findIndex((item) => item.id === task.id);
			if (idx === -1) return;
			tasksStore.updateTask(
				{
					id: task.id,
					text: event.detail
				},
				listIdx
			);
		}}
	>
		<div class="flex-it flex-row items-start">
			<div class="flex flex-1">{task.text}</div>
			<div class="flex items-center hover:text-red-600">
				<TrashBin />
			</div>
		</div>
	</Editable>
</div>
