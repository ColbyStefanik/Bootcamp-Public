import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useParams } from 'react-router-dom';

function App() {

  const Home = (props) => {
    return (
      <hi1>Welcome!</hi1>
    )
  }

  const Word = (props) => {

    const {word} = useParams();

    return(
      <p>The word is: {word}</p>
    )
  }

  const Number = (props) => {

    const {number} = useParams();

    return(
      <p>The Number is: {number}</p>
    )
  }

  const ColorWord = (props)=>{

    const {word, color, bgColor} = useParams();

    return(
      <p style={
        color?
        {color: color, backgroundColor: bgColor}
        :null}>
        The word is: {word}
      </p>
    )
}

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home/>} path="/home"/>
          <Route element={<Word/>} path="/:word" />
          <Route element={<Number/>} path="/:number" />
          <Route element={<ColorWord/>} path="/:word/:color/:bgColor" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
