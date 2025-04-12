<script lang="ts">
  import ReqButton from "$components/ReqButton.svelte";
</script>

<div class="centering">
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
    <div class="card">
      <ReqButton icon="stop" method="GET" uri="http://localhost:5173/" />
    </div>
    <div class="card">
      <ReqButton icon="status" method="GET" uri="http://localhost:5173/" />
    </div>
  </div>
</div>

<style>
  .card {
    padding: 1em;
    display: block;
  }
  .centering {
    display: flex;
    place-content: center;
  }
</style>
