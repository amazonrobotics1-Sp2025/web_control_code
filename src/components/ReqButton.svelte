<script lang="ts">
  const {
    uri,
    method,
    icon,
    raw_size = 1,
  }: { uri: string; method: string; icon: string; raw_size?: number } = $props();
  import { Button } from "$lib/components/ui/button/index.js";
  import { default as Reload } from "$assets/reload.svelte";

  const size = 32 * raw_size

  let iconpath;
  switch (icon) {
    case "status":
      iconpath = "/src/assets/status.svelte";
      break;
    case "stop":
      iconpath = "/src/assets/stop.svelte";
      break;
    default:
      throw "No Icon Found";
  }

  const IconComponent = import(/* @vite-ignore */ iconpath);
  // const ic = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 20000));
  //   return import(/* @vite-ignore */ iconpath);
  // };
  // const IconComponent = ic();

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

{#await IconComponent}
  <Button variant="outline" size="logo" disabled>
    <Reload
      class={`p-1 animate-spin`}
      width={size}
      height={size}
    />
  </Button>
{:then { default: IconComponent }}
  <Button
    variant="outline"
    size="logo"
    onclick={sendReq}
    class="
    p-1
	  hover:border-[#646cff] hover:border 
    focus:border-[#646cff] focus:border 
		focus-visible:border-[#646cff] focus-visible:border"
  >
    <IconComponent width={size} height={size} display="block" />
  </Button>
{/await}
