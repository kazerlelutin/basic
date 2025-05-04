import { Counter } from "../components/Counter";
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const posts = await getPosts();

export function Home() {

  return (
    <main>
      <h1>Page d'ezf</h1>
      <p>{posts?.[0]?.title}</p>
      <Counter />
      <a href="/about">À przefzeopos</a>
    </main>
  );
}
