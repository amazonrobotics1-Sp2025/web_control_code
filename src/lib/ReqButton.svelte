<script lang="ts">
  const {
    uri,
    method,
    icon,
    raw_size = 1,
  }: {
    uri: string;
    method: string;
    icon: string;
    raw_size?: number;
  } = $props();
  import { Button } from "$lib/components/ui/button/index.js";
  import { Reload, Status, Stop } from "$assets/index";

  const size = 32 * raw_size;

  let IconComponent = $state(Reload);
  switch (icon) {
    case "status":
      IconComponent = Status;
      break;
    case "stop":
      IconComponent = Stop;
      break;
    default:
      throw "No Icon Found";
  }

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

<!-- <Button variant="outline" size="icon" disabled>
    <Reload
      class={`p-1 animate-spin`}
      width={size}
      height={size}
    />
  </Button> -->

<Button
  variant="outline"
  size="icon"
  onclick={sendReq}
  class="
    p-1
	  hover:border-[#646cff] hover:border 
    focus:border-[#646cff] focus:border 
		focus-visible:border-[#646cff] focus-visible:border"
>
  <IconComponent width={size} height={size} display="block" />
</Button>
