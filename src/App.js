import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <h2>Contador: {contador}</h2>
          <button onClick={() => setContador(contador + 1)}>+1</button>
          <button onClick={() => setContador(contador - 1)}>-1</button>

        </div>
      </header>

    </div>
  );
}

export default App;
