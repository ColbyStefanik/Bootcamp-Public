import './App.css';
import React, { useState } from 'react';
import Boxes from './components/Boxes';
import BoxInput from './components/BoxInput';

function App() {

  const [ boxColorList, setBoxColorList ] = useState([]);

  return (
    <div className="App">
      <BoxInput boxColorList={ boxColorList } setBoxColorList={ setBoxColorList }></BoxInput>
      <Boxes boxColorList={ boxColorList }></Boxes>
    </div>
  );
}

export default App;
