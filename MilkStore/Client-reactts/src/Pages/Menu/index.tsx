import { PageProps } from "../../globalTypes";
import ArrowLeft from "../../Assets/Icons/arrow-left.svg";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { SocialMedia } from "../../Containers/SocialMedia";
import { Fragment } from "react";

export const Menu: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  const { milkCart } = state
  const navigate: NavigateFunction = useNavigate()
  const handleClick = () => {
    navigate("/milk-cart")
    dispatch && dispatch({ 
      type: "MOVING",
      payload: {current: "/milk-cart", history: "/menu"}
    })
  }

  return(
    <Fragment>
      <section className="Menu">
        <article className="Menu__bar" onClick={handleClick}>
          <h2 className="Menu__title">Milk Cart</h2>

          <div className="Menu__buttons">
            {(milkCart.length > 0) && (
              <span className="Menu__notification">
                <p>{milkCart.length < 10 ? milkCart.length : "+9"}</p>
              </span>
            )}

            <span className="Menu__arrow-right">
              <img src={ArrowLeft} alt="" />
            </span>
          </div>
        </article>
      </section>

      <div className="Menu__footer">
        <SocialMedia />
      </div>
    </Fragment>
  )
}