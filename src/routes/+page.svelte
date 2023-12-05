<script lang="ts">
	import { onMount } from 'svelte';
	import Counter from '../components/counter.svelte';

	// let data: any;
  
  // async function getData() {
  //   let res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   if (res.ok) {
  //     data = await res.json();
	// 	} else {
	// 		throw new Error("error");
	// 	}
  // }
	// onMount(() => {
  //   getData();
	// });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- {#if data && data.length > 0}
  {#each data as item}
  {@debug item}
    <p>{item.title}</p>
  {/each}
{:else} 
  <p>loading</p>
{/if} -->

<Counter />