<script lang="ts">
  import "./app.css";
  import svelteLogo from "$assets/store.svg";
  import ReqButton from "$components/ReqButton.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<main>
  <div id="header">
    <div class="centering">
      <img
        src={svelteLogo}
        class="logo storage"
        alt="Warehouse Logo"
        id="mainLogo"
      />
    </div>
    <h1 id="siteTitle">Storage Control Panel</h1>
  </div>

  <div class="centering">
    <Separator class="my-4 w-[75vw]" />
  </div>

  <div class="centering">
    <div class="grid max-w-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div class="card">
        <ReqButton icon="stop" method="GET" uri="http://localhost:5173/" />
      </div>
      <div class="card">
        <ReqButton icon="status" method="GET" uri="http://localhost:5173/" />
      </div>
    </div>
  </div>

  <div class="centering">
    <Separator class="my-1 w-[25vw]" />
  </div>

  <div id="footer">
    <p class="subtext">Powered by Amazon Robotics Team 1</p>
    <p class="subtext">ME424 Spring 2025</p>
  </div>
</main>

<style>


  #siteTitle {
    font-size: 2.5em;
    line-height: 1.1;
    margin: 4px 0px 0px 0px;
  }

  .card {
    padding: 1em;
  }

  #mainLogo {
    display: block;
    height: 8em;
    padding: 0.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  #mainLogo:hover {
    filter: drop-shadow(0 0 2em #ff9900);
  }

  .subtext {
    font-size: x-small;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }

  .centering {
    display: flex;
    place-content: center;
  }
</style>
