import React from 'react';
import stockVideo from 'assets/videos/stockVideo.mp4';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import {FindTireForm} from "components/FindTireForm/FindTireForm";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Rolutu Tires</h1>
        <button className={styles.button} type="button" onClick={() => navigate('/model-select')}>Start Building</button>
        <div/>
      </div>
      <div className={styles.findTireContainer}>
        <FindTireForm/>
      </div>
    </div>
  );
}



