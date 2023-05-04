import style from "./Content.module.css";
const Content = (props) => {
  return (
    <div className={style.Content}>
      <div className={style.PropertyImg}>
        <img src={props.img} alt="" />
      </div>
      <div className={style.ContentDiv}>
        <div className={style.ContentDetail}>
          <div className={style.Details}>
            <i className="fa-solid fa-location-dot"></i>
            {props.location}
          </div>
          <div className={style.Details}>${props.price}</div>
        </div>
        <div className={style.ContentDetail}>
          <div className={style.Details}>
            <i className="fa-solid fa-bed"></i>
            {props.bedroom} Bedroom
          </div>
          <div className={style.Details}>
            <i className="fa-solid fa-bath"></i>
            {props.bathroom} Bath
          </div>
          <div className={style.Details}>
            <i className="fa-solid fa-house-chimney"></i>
            {props.sqr} sq/f
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
