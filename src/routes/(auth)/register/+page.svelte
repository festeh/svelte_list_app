<div class="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="font-bold text-4xl mb-4 text-white">
		<a href="/">Join the Glide</a>
	</div>
	<div class="max-w-md w-full space-y-8 bg-gray-50 rounded-2xl p-4">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				Register for an account
			</h2>
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
						for="full-name"
						class="sr-only"
					>
						Full Name
					</label>
					<input
						id="full-name"
						name="full-name"
						type="text"
						autocomplete="name"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Full Name"
					/>
				</div>
				<div>
					<label
						for="nickname"
						class="sr-only"
					>
						Nickname
					</label>
					<input
						id="nickname"
						name="nickname"
						type="text"
						autocomplete="nickname"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Nickname"
					/>
				</div>
				<div>
					<label
						for="email-address"
						class="sr-only"
					>
						Email address
					</label>
					<input
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
						for="avatar"
						class="sr-only"
					>
						Avatar
					</label>
					<input
						id="avatar"
						name="avatar"
						type="text"
						autocomplete="avatar"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Avatar"
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
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
				</div>
				<div>
					<label
						for="password-confirmation"
						class="sr-only"
					>
						Password Confirmation
					</label>
					<input
						id="password-confirmation"
						name="password-confirmation"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password Confirmation"
					/>
				</div>
			</div>

			<div class="pb-8">
				<button
					type="submit"
					class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Register
				</button>
			</div>
		</form>
	</div>
</div>
