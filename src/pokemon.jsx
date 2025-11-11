import './pokemon.css'
const PokemonImage = ({src}) => {
  return (
    <img src={src} alt="This image is not available"/>
  )
};
const PokemonName = ({name}) => {
  return (
    <p className='pokemonName'>{name}</p>
  )
};

const PokemonId = ({id}) => {
  return (
    <p className='pokemonId'>{id}</p>
  )
};

const PokemonType = ({types}) => {
  return (
    <p className='pokemonType'>{types.map((currentObj)=>" "+currentObj.type.name)}</p>
  )
};

export const Pokemon = ({pokemonData}) => {
  return (
    <div className = 'pokemonCard'>
      <PokemonImage src={pokemonData.sprites.other.home.front_default}></PokemonImage>
      <PokemonName name={pokemonData.name}></PokemonName>
      <PokemonId id={pokemonData.id}></PokemonId>
      <PokemonType types={pokemonData.types}></PokemonType>
    </div>
  )
};