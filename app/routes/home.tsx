import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <h1>Linki do Pokedex'ów:</h1>
    <ul>
      <li>
        <a href="/kwasow">Kwasow</a>
      </li>
    </ul>
  </div>;
}
