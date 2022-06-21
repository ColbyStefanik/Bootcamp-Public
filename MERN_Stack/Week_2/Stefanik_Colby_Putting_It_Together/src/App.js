import './App.css';
import PersonCard from './components/PersonCard';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Bill" } lastName={ "Justice" } age={ 42 } hairColor={ "Brown" }/>
      <PersonCard firstName={ "John" } lastName={ "Doe" } age={ 32 } hairColor={ "Black" }/>
    </div>
  );
}

export default App;
