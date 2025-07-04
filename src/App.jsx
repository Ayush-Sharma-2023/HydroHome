import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemonList } from './api/pokemon';

function App() {
  const [pokemonData,setPokemonData] = useState([]);
  
  useEffect(() => {
    async function fetchData(){
      const data = await getAllPokemonList();
      setPokemonData(data?.results);
    }
    fetchData();
  },[])
  return (
      <>
      <h1>hello manifest 2</h1>
    <div >
      
      {pokemonData?.map((poke) => {
        return (
          <div >
              <div >
                <p > {poke.name}</p>
              </div>
              <img  alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}/>
          </div>
        )
      })}
      <div>

      </div>
    </div>
  </>
  );
}

export default App;
