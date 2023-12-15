<script>
	import TiTrash from "svelte-icons/ti/TiTrash.svelte";
	import TiHeartOutline from "svelte-icons/ti/TiHeartOutline.svelte";
	import TiMessage from "svelte-icons/ti/TiMessage.svelte";
</script>

<div class="flex flex-row w-full px-8">
	<div class="flex flex-col items-center w-2/12">
		<img
			class="rounded-full w-10"
			src="https://www.pinclipart.com/picdir/big/54-549237_supernatural-clip-art.png"
			alt="profile"
		/>
	</div>
	<div class="flex flex-col w-10/12">
		<div class="flex justify-between">
			<div>
				<span class="font-bold">Dima</span>
				<span class="mx-2">•</span>
				<span class="text-gray-400">2h</span>
			</div>
			<div class="icon">
				<TiTrash />
			</div>
		</div>
		<div>
			<div class="mb-4">My first post!</div>
		</div>
		<div class="flex text-gray-400">
			<div class="mr-5 flex hover:text-blue-400">
				<div class="icon">
					<TiMessage />
				</div>
				<span class="ml-1 text-xs self-center">321</span>
			</div>
			<div class="mr-5 flex hover:text-pink-400">
				<div class="icon">
					<TiHeartOutline />
				</div>
				<span class="ml-1 text-xs self-center">4883</span>
			</div>
		</div>
	</div>
</div>
