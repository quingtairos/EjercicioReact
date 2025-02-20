import { useState } from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Productos from './components/Productos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Header />
        <Inicio />
        <Productos />
        
        <Footer />
      </div>
    </>
  );
}


export default App;