import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

// Composant chargé d'afficher une liste de resultats
export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // Créer une fonction qui appelle l'api
    const fetchData = async () => {
      // Appeler mon api (je reçois du text degueu)
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=3");
      // Transformer le txt en json
      const data = await response.json();
      // Extraire les clés dont on a besoin
      const { results } = data;
      // Stocker le resultat dans un state
      setPokemons(results);
    };
    // Appeler la fonction
    fetchData();
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <p>{pokemons.length} résultats</p>
      <ul>
        {/* Pour chaque resultat de mon tableau */}
        {pokemons.map((_pokemon, index) => {
          // const pokemon = pokemons[index]
          return (
            // Affiche une balise à partir du numéro du Pokemon
            <Pokemon id={index + 1} />
          );
        })}
      </ul>
    </>
  );
}
