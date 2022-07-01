import './App.css';
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [pokemon, setPokemon]  = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
  }, []);

  return (
    <div className="App">
      {pokemon.length > 0 && pokemon.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
      })}
    </div>
  );
}

export default App;
