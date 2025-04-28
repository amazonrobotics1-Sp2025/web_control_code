<script lang="ts">
  import Reload from "$assets/reload.svelte";

  const {
    id,
    width = 32,
    height = 32,
  }: { id: string; height?: number; width?: number } = $props();

  let open = $state(true);
  let disabled = $state(false);
  const store = async () => {
    disabled = true;
    await new Promise((resolve) => setTimeout(resolve, 5000));
    open = !open;
    disabled = false;
  };
</script>

<button
  id={open ? "open" : "close"}
  class="flex flex-col justify-end items-center bg-green-300 m-1
        border-gray-300 border rounded-xl shadow-md
        hover:border-[#646cff] focus:border-[#646cff] focus-visible:border-[#646cff]"
  style={`width: ${width}px; height: ${height}px`}
  onclick={store}
  {disabled}
>
  {#if disabled}
    <Reload width={width / 4} height={height / 4} class="animate-spin" />
  {/if}
  <p class="text-xs text-gray-600 m-1">{id}</p>
</button>

<style>
  #open {
    background-color: var(--color-green-300);
  }
  #close {
    background-color: var(--color-pink-400);
  }
</style>
