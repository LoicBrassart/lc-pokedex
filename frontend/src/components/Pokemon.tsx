import { useEffect, useState } from "react";
import { Link } from "react-router";

type Props = {
  id: number;
};
export default function Pokemon({ id }: Props) {
  const [pokemonData, setData] = useState(null);

  useEffect(() => {
    // Créer une fonction qui appelle l'api
    const fetchData = async () => {
      // Appeler mon api (je reçois du text degueu)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      // Transformer le txt en json
      const data = await response.json();
      // Stocker le resultat dans un state
      setData(data);
    };
    // Appeler la fonction
    fetchData();
  }, []);

  // Si pas (erncore) de data, afficher un message par defaut
  if (!pokemonData) return <p>Loading...</p>;

  // Si j'arrive ici, c'est que *j'ai* un Pokemon
  return (
    <li>
      {/* On peut utiliser nos props ou les données de l'api */}
      <h2>
        #{id} - <Link to={`/favpoke/${id}`}>{pokemonData.name}</Link>
      </h2>
      {/* On peut aller chercher des champs profondement enfouis dans notre api */}
      <img src={pokemonData.sprites.front_shiny} alt={pokemonData.name} />
    </li>
  );
}
