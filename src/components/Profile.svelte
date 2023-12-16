<script>
	import TiSocialFlickr from "svelte-icons/ti/TiSocialFlickr.svelte";
	import Popup from "./Popup.svelte";
</script>

<div class="flex flex-col flex-grow justify-end items-end h-full rounded-xl p-2">
	<Popup>
		<div
			class="flex flex-row justify-between w-full items-center p-2 rounded-2xl
hover:bg-gray-800"
		>
			<div class="flex">
				<img
					src="https://www.pinclipart.com/picdir/big/54-549237_supernatural-clip-art.png"
					class="rounded-full w-12 h-12"
					alt="profile"
				/>
				<div class="flex flex-row items-center font-bold mx-3">Dima</div>
			</div>
			<div class="flex icon">
				<TiSocialFlickr />
			</div>
		</div>
	</Popup>
</div>
