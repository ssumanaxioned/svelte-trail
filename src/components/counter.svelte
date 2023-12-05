<script>
	import Item from './item.svelte';

	let props = $$props;
	console.log(props);
	// Reactive assignment
	let number = 0;

	function increment() {
		number += 1;
	}
</script>

<button on:click={increment}>increment</button>
<p>Number is {number}</p>

<Item test="need" isTrue />
