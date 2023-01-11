import logo from './logo.svg';
import './App.css';

// Importaciones para agergar autenticación, según la página de documentación
// de AWS
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



function App({ signOut, user }) { 
  // ... 
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba React vX. Con commit para GitHub.        
        </p> 
        {/* <Heading style={ { color:'white' } } level={1}>Hello {user.username}</Heading> */}
        <button style={ { color:'white' } } onClick={signOut}>Salir</button>       

      </header>

    </div>
  );
}

export default withAuthenticator(App);