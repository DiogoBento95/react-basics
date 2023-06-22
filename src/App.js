import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';

function App() {
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
      </header>
      <HelloWorld name="Diogo"/>

      <CounterExample />
    </div>
  );
}

export default App;
