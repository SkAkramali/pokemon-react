import './header.css';
import { useContext, useEffect} from "react";
import { dataContext } from "./App";
const Logo = () => {
  return (
    <h1 className='logo'>Pokemon World</h1>
  );
};
const SearchBar = () =>  {
  const data = useContext(dataContext);
  useEffect (()=> {
    const handelSearch = () => {
      const searchValue = data.search.toLowerCase()
      const matchedData = data.pokemons.filter((pokemon)=> {
        if(pokemon.name.includes(searchValue)|| pokemon.types[0].type.name.includes(searchValue)) {
          return pokemon;
        }
      });
      data.changeData(matchedData);
    }
    data.pokemons !== undefined ? handelSearch() : null;
  }, [data.search]);
  return (
    <input type='text' value={data.searchCriteria} className='searchBar' placeholder='Search.......' onChange={(e)=> {
      data.changeSearchValue(e.target.value);
    }}/>
  )
}
export const Header = () => {
  return (
    <header className="header">
      <Logo></Logo>
      <SearchBar></SearchBar>
    </header>
  );
}