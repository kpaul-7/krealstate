import Contents from "../Contents/Contents";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from "./Layout.module.css";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className={style.Main}>
        <Filter />
        <Contents />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
