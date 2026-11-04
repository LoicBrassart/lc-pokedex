import { useState } from "react";
import styles from "./Searchbar.module.css";

const characters = ["Jaguna", "Gugba", "54B2"];

export default function Searchbar() {
  const [needle, setNeedle] = useState("");

  const hChange = (evt) => {
    setNeedle(evt.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        className={`
          ${styles.searchInput} 
          ${needle && styles.hasResults}
        `}
        type="search"
        value={needle}
        onChange={hChange}
      />
      {needle && (
        <ul className={styles.results}>
          {characters
            .filter((character) => {
              return character.startsWith(needle);
            })
            .map((character) => {
              return <li>{character}</li>;
            })}
        </ul>
      )}
    </div>
  );
}
