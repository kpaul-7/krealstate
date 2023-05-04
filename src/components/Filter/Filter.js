import { Fragment, useState } from "react";
import style from "./Filter.module.css";
const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  let filterClasses =
    style.Filter + " " + (showFilter ? style.Show : style.Hide);
  const filterDisplayHandler = () => {
    setShowFilter((prev) => !prev);
  };
  return (
    <Fragment>
      <div className="shadowFilter"></div>
      <div className={style.MobileFilterDiv} onClick={filterDisplayHandler}>
        <i className="fa-solid fa-filter"></i>
        <span>Filters</span>
      </div>
      <div className={filterClasses}>
        <div className={style.MobileMenuClose}>
          <i className="fa-solid fa-xmark" onClick={filterDisplayHandler}></i>
        </div>
        <div className={style.Header}>
          <p>Filter</p>
          <button>Clear all</button>
        </div>
        <div>
          <div className={style.FormElement}>
            <label htmlFor="location">Location</label>
            <select name="" id="location" className={style.FormInput}>
              <option value="">West Bengal</option>
            </select>
          </div>
          <div className={style.FormElement}>
            <label htmlFor="typeofplace">Type of place</label>
            <select name="" id="typeofplace" className={style.FormInput}>
              <option value="">Town</option>
            </select>
          </div>
          <div className={style.FormElement}>
            <label htmlFor="price">Price Range</label>
            <input type="range" name="" id="" className={style.FormInput} />
            <p className={style.PriceTag}>1200$</p>
          </div>
          <div className={style.FormElement}>
            <p>Size</p>
            <div className={style.TwoInput}>
              <input
                type="text"
                placeholder="Min"
                className={style.FormInput}
              />
              <input
                type="text"
                placeholder="Max"
                className={style.FormInput}
              />
            </div>
          </div>
          <div className={style.Style}>
            <p>Style</p>
            <div className={style.StyleRow}>
              <div>
                <input type="checkbox" name="style[]" id="cottage" />
                <label htmlFor="cottage">Cottage</label>
              </div>
              <div>
                <input type="checkbox" name="style[]" id="private" />
                <label htmlFor="private">Private house</label>
              </div>
            </div>
            <div className={style.StyleRow}>
              <div>
                <input type="checkbox" name="style[]" id="desing" />
                <label htmlFor="design">Design</label>
              </div>
              <div>
                <input type="checkbox" name="style[]" id="farm" />
                <label htmlFor="farm">Farm</label>
              </div>
            </div>
          </div>
        </div>
        <div className={style.Accessibility}>
          <p>Accessibility features</p>
          <div className={style.AccessibilityRow}>
            <div>
              <input type="checkbox" name="accessibility[]" id="balcony" />
              <label htmlFor="balcony">Balcony</label>
            </div>
            <div>
              <input type="checkbox" name="accessibility[]" id="parking" />
              <label htmlFor="parking">Parking</label>
            </div>
          </div>
          <div className={style.AccessibilityRow}>
            <div>
              <input type="checkbox" name="accessibility[]" id="spa" />
              <label htmlFor="spa">Spa</label>
            </div>
            <div>
              <input type="checkbox" name="accessibility[]" id="pool" />
              <label htmlFor="pool">Pool</label>
            </div>
          </div>
          <div className={style.AccessibilityRow}>
            <div>
              <input type="checkbox" name="accessibility[]" id="restaurant" />
              <label htmlFor="restaurant">Restuarant</label>
            </div>
            <div>
              <input type="checkbox" name="accessibility[]" id="fitness" />
              <label htmlFor="fiteness">Fitness Club</label>
            </div>
          </div>
        </div>
        <div className={style.Search}>
          <button>Search</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Filter;
