import { useState } from "react";

import useCharacters from "../hooks/useCharacters";
import CharacterItem from "./CharacterItem";
import SearchForm from "./SearchForm";

function CharacterList() {
  const [searchTerm, setSearchTerm] = useState("");
  const { characters, loading } = useCharacters(searchTerm);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <h1>Lista de personajes</h1>
      <div className="list-of-character">
        {characters &&
          characters.map((character) => (
            <CharacterItem character={character} />
          ))}
        {!characters && (
          <small>{`No existe el personaje llamado: ${searchTerm}`}</small>
        )}
      </div>
    </>
  );
}

export default CharacterList;
