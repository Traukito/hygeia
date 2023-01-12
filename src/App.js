import logo from './logo.svg';
import './App.css';

// Importaciones para agergar autenticación, según la página de documentación
// de AWS
// import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';

// function App({ signOut, user }) { 
function App() { 
  // ... 
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prueba React vX. Con commit para GitHub.        
        </p> 
        {/* <Heading style={ { color:'white' } } level={1}>Hello {user.username}</Heading> */}
        {/* <Button style={ { color:'white' } } onClick={signOut}>Salir</Button>        */}

      </header>

    </div>
  );
}
export default App;
// export default withAuthenticator(App);