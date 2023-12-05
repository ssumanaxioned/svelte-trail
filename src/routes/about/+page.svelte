<script>
	import { page } from '$app/stores';

  const { data } = $page.data;
  let task = "";
  let desc = "";
  let completed = false;
</script>

<h1>About</h1>
{#if data && data.length > 0}
  {#each data as item}
  {@debug item}
    <!-- <a href={item.id}>{item.title}</a> -->
    <p class="bg-slate-400">{item.title}</p>
  {/each}
{:else} 
  <p>loading</p>
{/if}

<form>
  
</form>