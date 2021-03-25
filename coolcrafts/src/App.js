import logo from './logo.svg';
import './App.css';

function App() {
  const api_key = `${process.env.REACT_APP_API_KEY}`;

  console.log("api key");

  const url = `https://openapi.etsy.com/v2/listings/967023146?api_key=${process.env.REACT_APP_API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));

  return (
    <div className="App">
      <h1>CoolCrafts</h1>
    </div>
  );
}

export default App;
