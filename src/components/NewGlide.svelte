<script>
	import TiImageOutline from "svelte-icons/ti/TiImageOutline.svelte";
</script>

<div class="flex flex-row h-full py-2 px-8">
	<div class="flex flex-col w-2/12 justify-start items-center self-stretch hover:opacity-80">
		<img
			class="rounded-full w-10"
			src="https://www.pinclipart.com/picdir/big/54-549237_supernatural-clip-art.png"
			alt="avatar"
		/>
	</div>
	<div class="flex flex-col w-10/12">
		<div>
			<textarea
				class="w-full h-full text-white p-1 bg-gray-800 rounded-xl focus:outline-none
        focus:ring-0"
        rows="1"
				placeholder="What's on your mind?"
			></textarea>
		</div>
		<div class="flex justify-between mt-3">
			<div class="flex flex-col self-stretch justify-end hover:text-blue-400">
				<div class="icon">
					<TiImageOutline />
				</div>
			</div>
			<div>
				<button class="bg-blue-400 hover:bg-blue-500 rounded-xl p-2">Glide</button>
			</div>
		</div>
	</div>
</div>
