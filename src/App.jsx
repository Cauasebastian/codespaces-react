// components 
import FirstComponent from './components/FirstComponent';
import templateExpressions from './components/templateExpressions';
import Events from './components/Events';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent/>
        {templateExpressions()}
        <h1>GitHub Codespaces</h1>
        {Events()}
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
            <p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
           
            </p>
          </header>
        </div>
  );
}

export default App;
