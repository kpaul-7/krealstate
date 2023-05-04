import { useState } from "react";
import style from "./Navbar.module.css";
const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const cangeMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };
  let mobileMenuClass =
    style.Mobiledropdown + " " + (showMenu ? style.Show : style.Hide);
  return (
    <div className={style.NavbarBackground}>
      <div className={style.Navbar}>
        <div className={style.Logo}>
          <i className="fa-solid fa-house"></i>
          <span>Real State</span>
        </div>
        <div className={style.Navs}>
          <div>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>{" "}
              <li>
                <a href="#">Contact</a>
              </li>{" "}
              <li>
                <a href="#">Help</a>
              </li>{" "}
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.MenuOptions}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-gear"></i>
          <i className="fa-solid fa-user"></i>
        </div>
        <div className={style.MobileNavOpen}>
          <i className="fa-solid fa-bars" onClick={cangeMenuHandler}></i>
        </div>
        <div className={mobileMenuClass}>
          <div className={style.MobileMenuClose}>
            <i className="fa-solid fa-xmark" onClick={cangeMenuHandler}></i>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>{" "}
              <li>
                <a href="#">About</a>
              </li>{" "}
              <li>
                <a href="#">Contact</a>
              </li>{" "}
              <li>
                <a href="#">Help</a>
              </li>{" "}
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className={style.MobileMenuOptions}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-gear"></i>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
