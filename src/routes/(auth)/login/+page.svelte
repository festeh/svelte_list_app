<script>
	let email = "";
	let password = "";

	function submit() {
		alert("email: " + email + " password: " + password);
	}
</script>

<div class="min-h-screen flex flex-col items-center justify-center">
	<div class="text-4xl font-extrabold text-white">Let's Glide!</div>
	<div class="mt-8 max-w-md w-full space-y-8 bg-gray-50 rounded-xl p-2">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
		</div>
		<form
			class="mt-8 space-y-6"
			action="#"
			method="POST"
		>
			<input
				type="hidden"
				name="remember"
				value="true"
			/>
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label
						for="email-address"
						class="sr-only"
					>
						Email address
					</label>
					<input
						bind:value={email}
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
					/>
				</div>
				<div>
					<label
						for="password"
						class="sr-only"
					>
						Password
					</label>
					<input
						bind:value={password}
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
				</div>
			</div>

			<div class="text-sm">
				<p class="text-gray-600">
					Don't have an account?
					<a
						href="/register"
						class="font-medium text-indigo-600 hover:text-indigo-500"
					>
						Register here.
					</a>
				</p>
			</div>

			<div class="pb-6">
				<button
					type="submit"
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          on:click={submit}
				>
					Log in
				</button>
			</div>
		</form>
	</div>
</div>
