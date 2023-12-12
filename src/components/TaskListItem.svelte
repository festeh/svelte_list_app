<script>
	import TrashBin from "./TrashBin.svelte";
	import Editable from "./Editable.svelte";

	export let task;

</script>

<div class="flex-it border border-solid rounded-xl cursor-grab bg-sky-500 p-2 mb-2">
	<Editable defaultValue={task.text}>
  <div class="flex-it flex-row items-start">
		<div class="flex flex-1">{task.text}</div>
		<div class="flex items-center hover:text-red-600">
			<TrashBin />
		</div>
  </div>
	</Editable>
</div>
