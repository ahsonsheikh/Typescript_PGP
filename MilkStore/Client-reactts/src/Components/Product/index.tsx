import { ButtonSmall } from "../ButtonSmall";
import Trash from "../../Assets/Icons/trash.svg";
import { ProductProps } from "./types";
import Milk from "../../Assets/Images/milk.png";

export const Product: React.FC<ProductProps> = ({ 
  name,
  storage,
  dispatch,
  id,
}): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id: id, storage: Number(e.target.value) } 
    })
  }

  return(
    <div className="Product">
      <div className="Product__thumbnail">
      <img src={Milk} alt={name} />
      </div>

      <div className="Product__content">
        <div>
          <h2>{name}</h2>
          <span>{storage} Liters</span>
          <select defaultValue={storage} onChange={(e) => handleChange(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        <ButtonSmall source={Trash} onclick={() => dispatch({ type: "REMOVE", payload: id })} />
      </div>
    </div>
  )
}