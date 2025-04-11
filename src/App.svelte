<script lang="ts">
	import svelteLogo from "@assets/store.svg";
	import Counter from "@components/Counter.svelte";
	import ReqButton from "@components/ReqButton.svelte";
</script>

<main>
	<div id="header">
		
		<div class="centering">
			<img src={svelteLogo} class="logo storage" alt="Warehouse Logo" />
		</div>
		<h1 id="siteTitle">Storage Control Panel</h1>
	</div>

	<div class="btnArray">
		<div class="card">
			<Counter />
		</div>

		<div class="card">
			<ReqButton icon="status" method="GET" uri="http://localhost:5173/" />
		</div>
	</div>


	<div id="footer">
		<p class="subtext">Powered by Amazon Robotics Team 1</p>
		<p class="subtext">ME424 Spring 2025</p>
	</div>
</main>

<style>
	#siteTitle {
		margin: 4px 0px 0px 0px;
	}

	.logo {
		display: block;
		height: 8em;
		padding: 0.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.storage:hover {
		filter: drop-shadow(0 0 2em #ff9900);
	}

	.subtext {
		font-size: x-small;
		margin-block-start: 0em;
		margin-block-end: 0em;
	}
	.btnArray {
		display: flex;
		place-content: center;
		/* display: grid; */
	}

	.centering {
		display: flex;
		place-content: center;
	}
</style>
