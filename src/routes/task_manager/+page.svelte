<script>
	import AddListButton from "../../components/AddListButton.svelte";
	import TaskList from "../../components/TaskList.svelte";
</script>



<div class="p-10 h-full">
<div class="text-white text-4xl mb-4">
Some List
</div>
<AddListButton />
<div class="flex-it flex-row">
<TaskList />
<TaskList />
<TaskList />
</div>
</div>
