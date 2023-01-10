import logo from './logo.svg';
import './App.css';

// Importaciones para agergar autenticación, según la página de documentación
// de AWS
// import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';



function App( { signOut, user } ) {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba React v3. Con commit para GitHub.
          <Heading style={{color:'white'}}level={1}>Hola {user.username}</Heading>
        </p>        
        <Button style={{color:'white'}} onClick={signOut}>Salir</Button>
      </header>

    </div>
  );
}

export default withAuthenticator(App);