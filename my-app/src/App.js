import logo from './logo.svg';
import './App.css';
import howler from "howler";
import soundTest from "./assets/notes_A.mp3";

function App() {

  function playNoteTest() {
    new Audio(soundTest).play();
    console.log("You clicked playNoteTest!");
  }

  return (
    <div className="App">
      <h1>Welcome to React Piano Keys!</h1>
      <button onClick={playNoteTest}>A Note</button>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
