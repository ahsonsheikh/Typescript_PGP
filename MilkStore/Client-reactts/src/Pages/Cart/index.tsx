import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ButtonCTA } from "../../Components/ButtonCTA";
import { Product } from "../../Components/Product";
import { PageProps, ActionType } from "../../globalTypes";
import { ITotalAmount, totalAmountInitial } from "./types";

export const Cart: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  const navigate: NavigateFunction = useNavigate()
  const { milkCart } = state
  const [totalAmount, setTotalAmount] = React.useState<ITotalAmount>(totalAmountInitial)

  React.useEffect(() => {

    if(milkCart.length) {
      let subtotal = 0;
      let taxes = 0;
      let total = 0;

      milkCart.forEach(product => {
        // subtotal += product.price * (product.storage as number)
        //Same price of 10 for every item for the time being
        subtotal += 10 * (product.storage as number)
        taxes += subtotal * 0.25;
        total += subtotal + taxes;
      })

      setTotalAmount({
        subtotal: Math.round(subtotal),
        taxes: Math.round(taxes),
        total: Math.round(total)
      })
    }
  }, [milkCart])

  return(
    <section className="Cart">
      {milkCart.length ? (
        <section className="Cart__content">
          <article className="Cart__products">
            {milkCart.map(product => (
              <Product 
                key={product.id} 
                name={product.name}
                type={product.type}
                // price={product.price}
                storage={product.storage as number}
                // img={product.image}
                dispatch={dispatch as React.Dispatch<ActionType>}
                id={product.id}
              />
            ))}
          </article>

          <article className="Cart__info">
            <div className="Cart__total">
              <div className="Cart__total--subtotal">
                <h2>Subtotal</h2>
                <span>${totalAmount.subtotal}</span>
              </div>

              <div className="Cart__total--subtotal">
                <h2>Taxes</h2>
                <span>${totalAmount.taxes}</span>
              </div>

              <div className="Cart__total--total">
                <h2>Total</h2>
                <span>${totalAmount.total}</span>
              </div>
            </div>

            <ButtonCTA 
              content="Proceed to Checkout"
              onclick={() => {
                dispatch && dispatch({
                  type: "MOVING",
                  payload: {
                    current: "/milk-cart",
                    history: "/checkout"
                  }
                })

                dispatch && dispatch({
                  type: "AMOUNT",
                  payload: totalAmount.total 
                })
                navigate("/checkout")
              }}
            />
          </article>
        </section>
      ) : (
        <span className="Cart__msg">The cart is empty</span>
      )}
    </section>
  )
}