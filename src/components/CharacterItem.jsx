import { Link } from "wouter";
function CharacterItem({ character }) {
  return (
    <div className="character">
      <Link href={`/details/${character.id}`} key={character.id}>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
      </Link>
    </div>
  );
}

export default CharacterItem;
