import React from "react";
import { RxReload } from "react-icons/rx";
import Products from "../../Products";
import AllCollapseExample from "./Accordion";
import styles from "./styles.module.css";

const FilterdData = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.firstRow}>
        <div>
          <button className={styles.button}>Filter</button>
        </div>
        <div>
          <button className={styles.button}>Reset</button>
        </div>
         </div>{/* end of first line in left side  */}
         <AllCollapseExample/>

        
      </div>

      <div className={styles.rightSide}>
        <Products />
        <div className={styles.loading}>
           
        <RxReload/>
        <button className={styles.loadingText}>LOADING </button>
        </div>
       

      </div>
    </div>
  );
};

export default FilterdData;
