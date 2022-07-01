import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

function App() {

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((response) => {setPokemonData(response.data.results);})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
        {pokemonData.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>)
        )}
    </div>
  );
}

export default App;