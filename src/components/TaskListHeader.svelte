<script>
	import TrashBin from "./TrashBin.svelte";
	import { tasksStore } from "../stores/tasks.js";
	import Editable from "./Editable.svelte";
	export let name = "";
	export let listIdx;

	function renameList(event) {
		tasksStore.updateListName(listIdx, event.detail);
	}
</script>

<div class="flex-it flex-row text-lg m-3">
	<Editable
		value={name}
		on:updated={renameList}
	>
		<div class="text-left font-bold mr-2">{name}</div>
	</Editable>
	<div class="flex items-center hover:text-red-600">
		<button
			on:click={() => {
				tasksStore.removeList(listIdx);
			}}
		>
			<TrashBin />
		</button>
	</div>
</div>
