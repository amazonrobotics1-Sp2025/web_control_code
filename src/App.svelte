<script lang="ts">
  import "./app.css";
  import svelteLogo from "$assets/store.svg";
  import Commands from "$components/Commands.svelte";
  import Interactive from "$components/Interactive.svelte";
  import { Separator } from "$lib/components/ui/separator";
  import * as Tabs from "$lib/components/ui/tabs/index.js";

  let scrollbox: HTMLElement;
  const logs = $state<string[]>([]);

  const pushTest = () => {
    logs.push(new Date().toUTCString());
    scrollbox.scrollTop = scrollbox.scrollHeight;
  };
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

  <Tabs.Root value="interactive" class="w-100">
    <Tabs.List class="grid w-full grid-cols-2">
      <Tabs.Trigger value="commands">Commands</Tabs.Trigger>
      <Tabs.Trigger value="interactive">Interactive</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="commands">
      <Commands />
    </Tabs.Content>
    <Tabs.Content value="interactive">
      <Interactive width={384} height={256} />
    </Tabs.Content>
  </Tabs.Root>

  <div class="centering">
    <Separator class="my-2 w-[65vw]" />
  </div>

  <div
    id="scrollbox"
    class="my-3 w-100 h-[25vh] min-h-[200px]
    rounded-sm border border-grey-300 shadow-md
    overflow-y-scroll"
    bind:this={scrollbox}
  >
    {#each logs as log}
      <p>{log}</p>
    {/each}
  </div>

  <div class="centering">
    <Separator class="my-1 w-[25vw]" />
  </div>

  <div id="footer">
    <p class="subtext">Powered by Amazon Robotics Team 1</p>
    <p class="subtext">ME424 Spring 2025</p>
    <button onclick={pushTest} class="text-xs">Push Date to box</button>
  </div>
</main>

<style>
  #siteTitle {
    font-size: 2.5em;
    line-height: 1.1;
    margin: 4px 0px 0px 0px;
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
