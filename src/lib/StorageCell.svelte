<script lang="ts">
  const {
    id,
    width = 32,
    height = 32,
  }: { id: string; height?: number; width?: number } = $props();

  let open = $state(true);
</script>

<button
  id={open ? "open" : "close"}
  class="flex justify-center items-end bg-green-300 m-1
        border-gray-300 border rounded-xl shadow-md
        hover:border-[#646cff] focus:border-[#646cff] focus-visible:border-[#646cff]"
  style={`width: ${width}px; height: ${height}px`}
  onclick={() => {
    open = !open;
  }}
>
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
