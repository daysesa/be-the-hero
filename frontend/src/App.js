import React from 'react';

import './global.css';

//import Logon from './pages/Logon'; //não precisa importar index porque essa procura é automática
import Routes from './routes';

function App() {

  /*
  const [counter, setCounter] = useState(0); // retorna uma Array de duas posições [valor, funcaoDeAtualizacao]

  function increment(){
    setCounter(counter + 1);

//    console.log(counter);
  }
*/
  return (
    //<h1>Hello World</h1>
    /*<div>
    <Header>Contador: {counter}</Header>
    <button onClick={increment}>Incrementar</button>
    </div>*/
    //<Logon />
    <Routes />
  );
}

export default App;
