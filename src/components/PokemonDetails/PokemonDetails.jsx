import { useParams } from "react-router";

const PokemonDetails = (props) => {
  // Always verify that any props are being passed correctly!
  console.log(props); // { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },

  const params = useParams()
  const poke = props.pokemon.find( p => p._id === parseInt(params.pokemonId))

  return (
    <>
      <h2>Pokemon Details</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{poke.weight}</dd>
        <dt>Height:</dt>
        <dd>{poke.height}</dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
