import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Productos from './components/Productos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Inicio />
        <Productos />
        <Header />
      </div>
    </>
  );
}


export default App;