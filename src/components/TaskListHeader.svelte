<script>
	import TrashBin from './TrashBin.svelte';
  export let name = '';
  export let listIdx;
  import { tasksStore } from '../stores/tasks.js';
</script>

<div class="flex-it flex-row text-lg m-3">
	<div class="text-left font-bold mr-2">{name}</div>
	<div class="flex items-center hover:text-red-600">
		<button
    on:click={() => {
      tasksStore.removeList(listIdx);
    }}
    ><TrashBin /></button>
	</div>
</div>
