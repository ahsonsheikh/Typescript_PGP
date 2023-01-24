import React, { useState } from 'react';
import './App.css';
import Product from './containers/Product';
import { ctx } from './context';
import { StateInterface } from './globalTypes';

function App() {
  const [state, setState] = useState<StateInterface>({
    products: []
  })

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => console.log(data))
    }, [])

  return (
    <ctx.Provider value={state}> 
    <div className="App">
      <Product />
    </div>
    </ctx.Provider>
  );
}

export default App;
