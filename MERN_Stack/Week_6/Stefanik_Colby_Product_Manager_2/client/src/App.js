import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import DisplayOneProduct from "./components/DisplayOneProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<DisplayOneProduct/>} path="/product/:id" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
