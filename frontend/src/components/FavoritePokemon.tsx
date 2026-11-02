import { useParams } from "react-router";
import Pokemon from "./Pokemon";

export default function FavoritePokemon() {
  const { num } = useParams();
  return (
    <>
      <h2>Mon favori</h2>
      <Pokemon id={Number(num)} />
    </>
  );
}
