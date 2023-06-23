<script>
	import { ERROR_CODE_ENUMS } from '$lib/constants/error';
	import { page } from '$app/stores';
	const errorCode = $page.error.code;
	const errorMessage = ERROR_CODE_ENUMS[errorCode];
</script>

<div>
	<h1>{$page.status}</h1>
	<p>{errorMessage}</p>
	<a href="/" class="pure-button">Back to Home</a>
</div>

<style>
	* {
		text-align: center;
	}

	h1 {
		color: lightgray;
		font-size: 10rem;
		margin: 25% 0 0 0;
	}

	p {
		color: lightgray;
		font-size: 2rem;
		margin: 0;
	}

	a {
		margin-top: 1rem;
        text-decoration: none;
	}
</style>
