<script lang="ts">
	import {
		Mail, Lock, Eye, EyeOff, ArrowRight, Mountain, Check
	} from 'lucide-svelte';

	let email = '';
	let password = '';
	let showPassword = false;
	let rememberMe = false;

	const bgImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80';

	function handleSubmit(e: Event) {
		e.preventDefault();
		// design only — no backend yet
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<div class="relative min-h-screen w-full overflow-hidden bg-slate-900">
	<!-- ============ TALL / PORTRAIT: blurred background ============ -->
	<div class="absolute inset-0 lg:hidden">
		<img
			src={bgImage}
			alt=""
			class="h-full w-full scale-110 object-cover blur-[6px] brightness-[0.5]"
		/>
		<div class="absolute inset-0 bg-slate-900/40"></div>
	</div>

	<!-- ============ WIDE / LANDSCAPE: split screen ============ -->
	<div class="relative flex min-h-screen">
		<!-- Left: image -->
		<div class="relative hidden lg:block lg:w-1/2 xl:w-[55%]">
			<img
				src={bgImage}
				alt=""
				class="absolute inset-0 h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/20 to-transparent"></div>

			<!-- floating quote / branding -->
			<div class="absolute bottom-0 left-0 p-12 xl:p-16">
				<div class="flex items-center gap-3 mb-6">
					<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20">
						<Mountain class="h-6 w-6 text-white" />
					</div>
					<span class="text-2xl font-bold tracking-tight text-white">Summit</span>
				</div>
				<h1 class="max-w-md text-3xl font-light leading-tight text-white/90 xl:text-4xl">
					"Every mountain top is within reach if you just keep climbing."
				</h1>
				<p class="mt-3 text-sm font-medium text-white/50">— Barry Finlay</p>
			</div>
		</div>

		<!-- Right: login form -->
		<div class="flex min-h-screen w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 xl:w-[45%] lg:bg-slate-50 lg:px-16 xl:px-24">
			<!-- card wrapper: glass on mobile/tablet, plain on desktop -->
			<div class="mx-auto w-full max-w-md rounded-2xl bg-white/90 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl sm:p-8 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0 lg:backdrop-blur-none">
			<!-- mobile branding (visible only when image side is hidden) -->
			<div class="mb-10 flex items-center gap-3 lg:hidden">
				<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
					<Mountain class="h-5 w-5" />
				</div>
				<span class="text-xl font-bold tracking-tight text-slate-900">Summit</span>
			</div>

			<div class="mx-auto w-full max-w-md">
				<!-- header -->
				<div class="mb-8">
					<h2 class="text-3xl font-bold tracking-tight text-slate-900">Welcome back</h2>
					<p class="mt-2 text-sm text-slate-500">
						New here?
						<a href="/signup" class="font-semibold text-blue-600 hover:text-blue-700 transition-colors">Create an account</a>
					</p>
				</div>

				<!-- form -->
				<form on:submit={handleSubmit} class="space-y-5">
					<!-- email -->
					<div>
						<label for="email" class="mb-1.5 block text-sm font-medium text-slate-700">Email address</label>
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
								<Mail class="h-[18px] w-[18px]" />
							</div>
							<input
								id="email"
								type="email"
								bind:value={email}
								placeholder="you@example.com"
								class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
							/>
						</div>
					</div>

					<!-- password -->
					<div>
						<div class="mb-1.5 flex items-center justify-between">
							<label for="password" class="block text-sm font-medium text-slate-700">Password</label>
							<a href="/forgot" class="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">Forgot password?</a>
						</div>
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
								<Lock class="h-[18px] w-[18px]" />
							</div>
							{#if showPassword}
								<input
									id="password"
									type="text"
									bind:value={password}
									placeholder="Enter your password"
									class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
								/>
							{:else}
								<input
									id="password"
									type="password"
									bind:value={password}
									placeholder="Enter your password"
									class="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-12 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
								/>
							{/if}
							<button
								type="button"
								on:click={() => (showPassword = !showPassword)}
								class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition-colors"
								aria-label={showPassword ? 'Hide password' : 'Show password'}
							>
								{#if showPassword}
									<EyeOff class="h-[18px] w-[18px]" />
								{:else}
									<Eye class="h-[18px] w-[18px]" />
								{/if}
							</button>
						</div>
					</div>

					<!-- remember me -->
					<!-- <div class="flex items-center gap-2.5">
						<button
							type="button"
							on:click={() => (rememberMe = !rememberMe)}
							class="relative h-5 w-5 rounded-md border transition-all duration-200 {rememberMe
								? 'border-blue-600 bg-blue-600'
								: 'border-slate-300 bg-white hover:border-slate-400'}"
							aria-label="Remember me"
						>
							{#if rememberMe}
								<Check class="absolute inset-0 m-auto h-3.5 w-3.5 text-white" />
							{/if}
						</button>
						<span class="text-sm text-slate-600">Remember me for 30 days</span>
					</div> -->

					<!-- submit button -->
					<button
						type="submit"
						class="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800 focus:ring-2 focus:ring-slate-900/20 focus:outline-none active:scale-[0.98]"
					>
						Sign in
						<ArrowRight class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
					</button>
				</form>

				<!-- divider -->
				<div class="my-7 flex items-center gap-4">
					<div class="h-px flex-1 bg-slate-200"></div>
					<!-- <span class="text-xs font-medium uppercase tracking-wide text-slate-400">or continue with</span> -->
					<div class="h-px flex-1 bg-slate-200"></div>
				</div>

				<!-- social buttons -->
				<!-- <div class="grid grid-cols-3 gap-3">
					<button class="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95">
						<Github class="h-5 w-5" />
					</button>
					<button class="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95">
						<Twitter class="h-5 w-5" />
					</button>
					<button class="flex items-center justify-center rounded-xl border border-slate-200 bg-white py-2.5 text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95">
						<Facebook class="h-5 w-5" />
					</button>
				</div> -->

				<!-- footer -->
				<p class="mt-8 text-center text-xs text-slate-400">
					By signing in you agree to our
					<a href="/terms" class="font-medium text-slate-600 hover:text-slate-900 transition-colors">Terms</a>
					and
					<a href="/privacy" class="font-medium text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</a>.
				</p>
			</div>
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
	}
</style>