import './App.css';
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [cuenta, setCuenta] = useState(0)
  const contar = () => setCuenta(cuenta + 1)

  return (
    <>
      <div className='container mt-3'>
        <button onClick={contar}>Clickea Aquí</button>
        <p>Clicks {cuenta}</p>
      </div>
    </>
  );
}

export default App;
