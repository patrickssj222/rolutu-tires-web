import styles from "./NavBar.module.scss";
import React from "react";
import {useNavigate} from "react-router-dom";
import Logo from 'assets/img/Logo-White.png';
export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={Logo} onClick={() => navigate('/')}/>
    </div>
  )
}
