import logo from './logo.svg';
import './App.css';

// Importaciones para agergar autenticación, según la página de documentación
// de AWS
// import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba React vX. Con commit para GitHub.        
        </p>        
      </header>

    </div>
  );
}

export default App;