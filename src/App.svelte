<script>
	const getTime = () => {
		let currentDate = new Date();

		let hours = currentDate.getHours();
		if (hours < 10) hours = `0${hours}`;
		let minutes = currentDate.getMinutes();
		if (minutes < 10) minutes = `0${minutes}`;

		let time = hours + ':' + minutes;

		return time;
	};

	const getDate = () => {
		let currentDate = new Date();

		let day = currentDate.getDate();
		if (day < 10) day = `0${day}`;
		let month = currentDate.getMonth() + 1;
		if (month < 10) month = `0${month}`;
		let year = currentDate.getFullYear();

		let completeDate = day + ' del ' + month + ' de ' + year;
		return completeDate;
	};
	let inputTexto;

	const handleSubmit = async () => {
		const actualTime = getDate() + '  a las  ' + getTime();

		let textoGuardar = actualTime + ' ----- ' + inputTexto;

		window.api.send('savenewfile', textoGuardar);
	};
</script>

<main>
	<div class="input">
		<form on:submit|preventDefault={handleSubmit}>
			<input
				bind:value={inputTexto}
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
