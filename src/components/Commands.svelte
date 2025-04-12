<script lang="ts">
  import ReqButton from "$lib/ReqButton.svelte";

  interface Command {
    icon: string;
    method: string;
    uri: string;
  }

  const commands: Command[] = [
    {icon: "stop", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
    {icon: "status", method: "get", uri: "/"},
  ]


</script>

<div class="centering">
  <div class="grid grid-cols-4 md:grid-cols-6">
    {#each commands as c}
    <div class="mx-2">
      <ReqButton {...c} />
    </div>
    {/each}
  </div>
</div>

<style>
  .centering {
    display: flex;
    place-content: center;
  }
</style>
