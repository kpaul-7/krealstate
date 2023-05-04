import style from "./Contents.module.css";
import DUMMY_DATA from "../../DATA/DATA";
import Content from "./Content/Content";
const Contents = () => {
  const properties = DUMMY_DATA.map((property) => (
    <Content
      key={property.id}
      img={property.img}
      location={property.location}
      price={property.price}
      bedroom={property.bedroom}
      bathroom={property.bathroom}
      sqr={property.sqr}
    />
  ));
  return <div className={style.Contents}>{properties}</div>;
};
export default Contents;
