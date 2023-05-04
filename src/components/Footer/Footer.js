import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={style.Footer}>
        <i className="fa fa-copyright" aria-hidden="true"></i>
        <span>
          Koushik Paul | 2023
          {new Date().getFullYear() === 2023
            ? ""
            : " - " + new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};
export default Footer;
