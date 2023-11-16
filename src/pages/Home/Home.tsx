import React from 'react';
import HomeBackground from 'assets/img/HomeBackground.png';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import {LocalShippingOutlined, PhoneOutlined, SafetyCheckOutlined} from "@mui/icons-material";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img className={styles.backgroundImage} src={HomeBackground} />
      <div className={styles.introContainer}>
        <text className={styles.header}>Rolutu Tires</text>
        <text className={styles.subHeader}>{"Affordable, Delivered To Your Doorstep"}</text>
      </div>
      <div className={styles.workFlowWrapper}>
        <div className={styles.flowGroup}>
          <PhoneOutlined className={styles.icon}/>
          <text className={styles.flowHeader}>FIND YOUR TIRE</text>
          <div className={styles.horizontalDivider} />
          <text className={styles.flowText}>Talk with our sales, let us find the perfect tire for your needs</text>
          <text className={styles.flowText}>Call Now: +1 (647)-928-0925</text>
        </div>
        <div className={styles.flowGroup}>
          <LocalShippingOutlined className={styles.icon}/>
          <text className={styles.flowHeader}>FREE DELIVERY</text>
          <div className={styles.horizontalDivider} />
          <text className={styles.flowText}>Free delivery to your doorstep or any body shop of your choosing</text>
          <text className={styles.flowText}>Just let us know and your tires will be ready at any location</text>
        </div>
        <div className={styles.flowGroup}>
          <SafetyCheckOutlined className={styles.icon}/>
          <text className={styles.flowHeader}>QUALITY GUARANTEED</text>
          <div className={styles.horizontalDivider} />
          <text className={styles.flowText}>All tires come with 1 year or 20,000 km warranty</text>
          <text className={styles.flowText}>With great tires comes great responsibilities!</text>
        </div>
      </div>
    </div>
  );
}



