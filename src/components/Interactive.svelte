<script lang="ts">
  import Interactive from "$components/Interactive.svelte";
  import StorageCell from "$lib/StorageCell.svelte";
  import type { Grid } from "$assets/gridLayout";

  const {
    width,
    height,
    gridLayout,
  }: { width: number; height: number; gridLayout: Grid } = $props();
  const cellWidth = width / gridLayout.width;
  const cellHeight = height / gridLayout.height;
</script>

<div class="centering">
  <div
    class="grid place-content-center max-w-lg"
    style={`grid-template-columns: repeat(${gridLayout.width}, minmax(0, 1fr))`}
  >
    {#each gridLayout.cells as cell}
      {#if cell.grid}
        <Interactive
          width={cellWidth}
          height={cellHeight}
          gridLayout={cell.grid}
        />
      {:else}
        <div class="centering">
          <StorageCell width={cellWidth} height={cellHeight} id={cell.cid} />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .centering {
    display: flex;
    place-content: center;
  }
</style>
