<script>
	import AddListButton from "../../components/AddListButton.svelte";
	import TaskList from "../../components/TaskList.svelte";

  const listName1 = "List 1";
  const listName2 = "List 2";
  const listName3 = "List 3";
</script>



<div class="p-10 h-full">
<div class="text-white text-4xl mb-4">
Some List
</div>
<AddListButton />
<div class="flex-it flex-row">
<TaskList name={listName1}/>
<TaskList name={listName2}/>
<TaskList name={listName3}/>
</div>
</div>
