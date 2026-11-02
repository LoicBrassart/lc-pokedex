import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <>
      {/* Role de App: afficher mon appli (n'a pas besoin de savoir appeler une api) */}
      <Pokedex />
      {/* J'ai le droit d'utiliser mes composants depuis n'importe où, je dois juste les importer */}
      <h2>Mon favori</h2>
      <Pokemon id={25} />
    </>
  );
}

export default App;
