import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Bill" } lastName={ "Justice" } age={ "42" } hairColor={ "Brown" }/>
      <PersonCard firstName={ "John" } lastName={ "Doe" } age={ "32" } hairColor={ "Black" }/>
      <PersonCard firstName={ "Jane" } lastName={ "Doe" } age={ "28" } hairColor={ "Red" }/>
      <PersonCard firstName={ "Janer" } lastName={ "Doe" } age={ "4" } hairColor={ "Red" }/>
    </div>
  );
}

export default App;
