import React, { useEffect, useReducer } from 'react';
import { Layout } from "./Layout";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Cart } from "./Pages/Cart";
import { Product } from './Pages/Product';
import { Checkout } from './Pages/Checkout';
import { Ctx } from "./Context";
import { initialState, reducer } from "./globalState";
import './App.scss';
import { StateInterface } from './globalTypes';


function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState())

  // Operation with local json data
  useEffect(() => {
    try {
      fetch('milk.json'
        // , {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //   }
        // }
      )
        .then(function (response) {
          return response.json();
        })
        .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data }))
    }
    catch (err) {
      dispatch({ type: "ERROR" });
    }
  }, [])

  // Operation with external API
  // useEffect(() => {
  //   try {
  //     fetch('https://localhost:7256/api/milk')
  //       .then(res => res.json())
  //       .then(data => dispatch({ type: "ADD_INITIAL_ITEMS", payload: data }))
  //   }
  //   catch (err) {
  //     dispatch({ type: "ERROR" });
  //   }
  // }, [])

  return (
    <Ctx.Provider value={state}>
      <section className="App">
        <BrowserRouter>
          <Layout dispatch={dispatch}>
            <Routes>
              <Route path="/" element={
                <Home
                  state={state as StateInterface}
                  dispatch={dispatch}
                  ctx={Ctx}
                />
              } />
              <Route path="/menu" element={
                <Menu
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              } />
              <Route path='/milk-cart' element={
                <Cart
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              } />
              <Route path='/products/:name' element={
                <Product
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              } />
              <Route path='/checkout' element={
                <Checkout
                  state={state as StateInterface}
                  dispatch={dispatch}
                />
              }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </section>
    </Ctx.Provider>
  );
}

export default App;
