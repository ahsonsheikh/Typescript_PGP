import React, { useContext } from "react";
import { FilterProps } from "./types";
import { ButtonCategory } from "../../Components/ButtonCategory";
import { Ctx } from "../../Context";

export const Filter: React.FC<FilterProps> = ({ dispatch, isInHeader }): JSX.Element => {
  const state = useContext(Ctx)
  const { names, filterAt, searching } = state
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "FILTER", payload: e.target.value })
  }

  return(
    <section className="Filter">
      <select defaultValue={searching ? "All items" : filterAt} className="Filter__dropdown" onChange={handleChange}>
        {names.map(nams => (
          <option value={nams} key={nams}>
            {nams}
          </option>
        ))}
      </select>

      {names.map(nams => (
        <ButtonCategory 
          key={nams}
          content={nams}
          dispatch={dispatch}
          to={isInHeader ? "/" : ""}
        />
      ))}
    </section>
  )
}