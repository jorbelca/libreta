<script>
	let textoGuardar;

	const handleSubmit = async () => {
		window.api.send('savenewfile', textoGuardar);

		textoGuardar = '';
	};
</script>

<main>
	<div class="input">
		<form on:submit|preventDefault={handleSubmit}>
			<input
				bind:value={textoGuardar}
				type="text"
				width="800"
				height="90"
				placeholder="Para guardar, Enter ⏎"
			/>
		</form>
	</div>
</main>

<style>
	:root {
		background-color: rgb(1, 1, 82);
		overflow: hidden !important;
	}
	.input {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		align-items: center;
		height: 80px;
	}
	.input input {
		width: 800px;
		height: 70px;
		outline: none !important;
		border: none;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: lighter;
		font-size: 25px;
		color: whitesmoke;
		padding: 0 13px 0 13px;
		background-color: transparent;
	}
	.input input:focus {
		outline: none !important;
		border: none;
	}
	.input input::placeholder {
		color: #d0d0cf7a;
		text-align: right;
	}
</style>
