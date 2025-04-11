<script lang="ts">
	// import Icon from "@iconify/svelte";
	import { iconmap } from "@components/iconmap";

	const {
		uri,
		method,
		icon,
		size = 1,
	}: { uri: string; method: string; icon: string; size?: number } = $props();

	const IconComponent = import(iconmap[icon]);

	const sendReq = async () => {
		try {
			const req = new Request(uri, {
				method: method,
			});
			const res = await (await fetch(req)).text();
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="centering">
		{#await IconComponent then { default: IconComponent }}
			<button onclick={sendReq} id="reqbutton">
				<IconComponent width={24 * size} height={24 * size} display="block" />
			</button>
		{/await}
</div>

<style>
	.centering {
		display: flex;
		place-items: center;
	}
	button {
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.5em 0.5em;
	}
</style>
