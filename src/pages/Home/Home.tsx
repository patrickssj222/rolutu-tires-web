import React from 'react';
import HomeBackground from 'assets/img/HomeBackground.jpg';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import {FindTireForm} from "components/FindTireForm/FindTireForm";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Rolutu Tires</h1>
        <button className={styles.button} type="button" onClick={() => navigate('#findTireSection')}>Find Your Tire</button>
      </div>
      <div className={styles.findTireContainer} id={"findTireSection"}>
        <FindTireForm/>
      </div>
    </div>
  );
}



