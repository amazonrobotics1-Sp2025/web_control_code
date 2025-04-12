<script lang="ts">
  import Interactive from "$components/Interactive.svelte";
  import StorageCell from "$lib/StorageCell.svelte";
  import type { Grid } from "$assets/gridLayout";
  import { Reload } from "$assets/index";

  const {
    width,
    height,
    gridProp,
  }: { width: number; height: number; gridProp?: Grid } = $props();

  let cellWidth = $state(0);
  let cellHeight = $state(0);
  const fetchGrid = async () => {
    const data = gridProp ? gridProp : await (await fetch("/grid.json")).json();

    cellWidth = width / data.width;
    cellHeight = height / data.height;
    console.log(data);
    return data;
  };
  const gridLayout = fetchGrid();
</script>

<div class="centering">
  {#await gridLayout}
    <Reload class={`p-1 animate-spin`} width="128" height="128" />
  {:then grid}
    <div
      class="grid place-content-center max-w-lg"
      style={`grid-template-columns: repeat(${grid.width}, minmax(0, 1fr))`}
    >
      {#each grid.cells as cell}
        {#if cell.grid}
          <Interactive
            width={cellWidth}
            height={cellHeight}
            gridProp={cell.grid}
          />
        {:else}
          <div class="centering">
            <StorageCell width={cellWidth} height={cellHeight} id={cell.cid} />
          </div>
        {/if}
      {/each}
    </div>
  {:catch error}
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Error: </strong>
      <span class="block sm:inline">{error}</span>
    </div>
  {/await}
</div>

<style>
  .centering {
    display: flex;
    place-content: center;
  }
</style>
