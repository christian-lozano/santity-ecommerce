import Containertype from "./Containertype"
import "./Typeandtype.css"

const Typeandtype = ({ props, children }) => {
  const { title, subtitle, type1, img1, link1, type2, img2, link2 } = props

  return (
    <div className="typeandtype">
      <h2>Categorías</h2>
      <div className="types">
        <Containertype
          limit={12}
          // products={allproducts.filter((x) => x.type === type1)}
          link={`shop/${link1}`}
          img={img1}
          title={type1}
          subtitle="Products"
        />
        {children}
        <Containertype
          limit={10}
          // products={allproducts.filter((x) => x.type === type2)}
          link={`shop/${link2}`}
          img={img2}
          title={type2}
          subtitle="Products"
        />
      </div>
    </div>
  )
}
export default Typeandtype
