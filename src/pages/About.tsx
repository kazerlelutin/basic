import { Counter } from "../components/Counter";

export function About() {
  return (
    <main>
      <h1>À propos</h1>
      <p>Ceci est une démo SSR BUN</p>
      <a href="/">Accueil</a>
      <Counter />
    </main>
  );
}
