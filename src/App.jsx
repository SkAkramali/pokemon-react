import { useState, createContext } from 'react'
import { Header } from './header'
import { useEffect } from 'react'
import { useFetch } from './usefetch';
import { Pokemons } from './pokemons';
export const dataContext = createContext();
function App() {
  const [pokemons, addPokemons] = useState();
  const [search, changeSearchValue] = useState();
  const [url, changeUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=1032&offset=0');
  const [data, setData] = useState();
  const [filterData, changeData] = useState();
  useEffect(()=> { 
    const fetchData = async() => {
      const responseData = await useFetch(url);
      setData(responseData);
    }
    fetchData();
  }, [url]);
  return (
    <>
      <dataContext.Provider value={{data, pokemons, addPokemons, search, changeSearchValue, filterData, changeData}}>
      <Header></Header>
      <Pokemons></Pokemons>
      </dataContext.Provider>
    </>
  )
}

export default App
