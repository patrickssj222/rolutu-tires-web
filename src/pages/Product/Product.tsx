import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Product.module.scss';
import tire from 'assets/img/tire.png'
import {SideBar} from "components/SideBar/SideBar";
export const Product = () => {
  const navigate = useNavigate();
  const tireList = [];
  for (let i = 0; i < 29; i++)
    tireList.push({});
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p className={styles.navbarText}>Rolutu Tires</p>
      </div>
      <div className={styles.body}>
        <div className={styles.sideBarWrapper}>
          <SideBar/>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentWrapper}>
            {
              tireList.map((tireItem, index) => {
                return (
                  <button key={index} type="button" className={styles.modelCard} onClick={() => {}}>
                    <img key={index} className={styles.modelImage} src={tire} alt={"Tire"+index} />
                    <p className={styles.modelText}> {"TIre "+index} </p>
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}



