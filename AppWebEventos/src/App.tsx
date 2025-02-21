import './App.css';

import Inicio from './components/Inicio/Inicio';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  //const [count, setCount] = useState(0)

  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/detalles/:id" component={DetallesProducto} />
          <Route path="/iniciar-sesion" component={IniciarSesion} />
        </Switch>
      </div>
    </Router>
  
  );
}


export default App;