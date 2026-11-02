import { Link, Route, Routes } from "react-router";
import Pokedex from "./components/Pokedex";
import FavoritePokemon from "./components/FavoritePokemon";

function App() {
  return (
    <>
      <h1>Mon super site</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/multipoke">Pokedex</Link>
          </li>
          <li>
            <Link to="/favpoke/25">My favorite Pokemon</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<p>J'suis un super site sur les pokemon</p>} />
        <Route path="/multipoke" element={<Pokedex />} />
        <Route path="/favpoke/:num" element={<FavoritePokemon />} />
      </Routes>
    </>
  );
}

export default App;
