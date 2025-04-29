import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokedex - index" },
    { name: "description", content: "Witamy w naszym Pokedexie!" },
  ];
}

export default function Home() {
  return <div>
    <h1>Linki do Pokedex'ów:</h1>
    <ul>
      <li>
        <a href="/kwasow">Kwasow</a>
      </li>
      <li>
        <a href="/Tereska">Tereska</a>
      </li>
    </ul>
  </div>;
}
