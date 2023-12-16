<script>
	import TiTrash from "svelte-icons/ti/TiTrash.svelte";
	import TiHeartOutline from "svelte-icons/ti/TiHeartOutline.svelte";
	import TiMessage from "svelte-icons/ti/TiMessage.svelte";

	export let glide;
</script>

<div class="flex flex-row w-full px-8">
	<div class="flex flex-col items-center w-2/12">
		<img
			class="rounded-full w-10"
			src={glide.avatar}
			alt="profile"
		/>
	</div>
	<div class="flex flex-col w-10/12">
		<div class="flex justify-between">
			<div>
				<span class="font-bold">{glide.username}</span>
				<span class="mx-2">•</span>
				<span class="text-gray-400">2h</span>
			</div>
			<div class="icon">
				<TiTrash />
			</div>
		</div>
		<div>
			<div class="mb-4">
				<span>{glide.text}</span>
			</div>
		</div>
		<div class="flex text-gray-400">
			<div class="mr-5 flex hover:text-blue-400">
				<div class="icon">
					<TiMessage />
				</div>
				<span class="ml-1 text-xs self-center">{glide.comments}</span>
			</div>
			<div class="mr-5 flex hover:text-pink-400">
				<div class="icon">
					<TiHeartOutline />
				</div>
				<span class="ml-1 text-xs self-center">{glide.likes}</span>
			</div>
		</div>
	</div>
</div>
