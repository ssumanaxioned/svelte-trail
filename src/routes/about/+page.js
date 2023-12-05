/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // if (res.ok) {
    const data = await res.json();
    return { data }
  // } else {
  //   throw error(404, "error");
  // }
}

export const prerender = true;