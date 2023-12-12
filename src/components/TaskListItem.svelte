<script>
	import TrashBin from './TrashBin.svelte';

  export let task = '';
</script>

<div class="flex-it flex-row border border-solid rounded-xl cursor-grab bg-sky-500 p-2 mb-2">
	<div class="flex-1">{task}</div>
	<div class="flex items-center hover:text-red-600">
		<TrashBin />
	</div>
</div>
