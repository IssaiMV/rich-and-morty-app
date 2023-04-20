import React, { useState, useEffect } from "react";

function CharacterDetails({ params }) {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const id = params.id;

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>
      <div className="container-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="container-data">
        <p>
          <span>Status:</span>
          {character.status}
        </p>
        <p>
          <span>Species:</span>
          {character.species}
        </p>
        <p>
          <span>Type:</span>
          {character.type || "N/A"}
        </p>
        <p>
          <span>Gender:</span>
          {character.gender}
        </p>
        <p>
          <span>Origin:</span>
          {character.origin.name}
        </p>
        <p>
          <span>Location:</span>
          {character.location.name}
        </p>
      </div>
    </div>
  );
}

export default CharacterDetails;
