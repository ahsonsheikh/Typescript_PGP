import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { ButtonCTA } from "../../Components/ButtonCTA"
import { Rating } from "../../Components/Rating"
import { StateInterface, ItemInterface, PageProps } from "../../globalTypes"

export const Product: React.FC<PageProps> = ({ state, dispatch }): JSX.Element => {
  const { name } = useParams()
  const { items } = state
  const item: ItemInterface = items.find(index => index.type.trim() === name?.trim()) as ItemInterface

  useEffect(() => {
    window.scrollTo(0, 0)
    // }, [searching])
  }, [])


  return (
    <section className="Detail">
      <article className="Detail__thumbnail">
        <img src='../Assets/Images/milk.png' alt="" />
      </article>

      <article className="Detail__info">
        <div className="Detail__info--header">
          <h2>{item.type}</h2>
          <ButtonCTA
            ItemId={item.id}
            dispatch={dispatch}
            added={item.added}
          />
        </div>

        {/* <div className="Detail__info--meta">
          <span className="Detail__price">${item.price}</span>
          <Rating content={item.rating.rate} />
        </div> */}

        <p className="Detail__info--description">
          {item.name}
        </p>
      </article>
    </section>
  )
}