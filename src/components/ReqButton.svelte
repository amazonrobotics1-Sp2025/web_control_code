<script lang="ts">
  const {
    uri,
    method,
    icon,
    size = 1,
  }: { uri: string; method: string; icon: string; size?: number } = $props();

  let iconpath;
  switch(icon) {
	case "status":
		iconpath = "/src/assets/status.svelte";
		break;
	default:
		throw "No Icon Found"
  }

  const IconComponent = import(/* @vite-ignore */ iconpath);

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
  #reqbutton {
    padding: 0.5em 0.5em;
  }
</style>
