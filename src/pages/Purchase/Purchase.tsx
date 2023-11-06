import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Purchase.module.scss';
import tire from 'assets/img/tire.png'
import {SideBar} from "components/SideBar/SideBar";
import {TextInput} from "components/Input/TextInput";
import {Button} from "components/Button/Button";
import {ChevronLeft} from "@mui/icons-material";
export const Purchase = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <p className={styles.navbarText} onClick={() => navigate("/")}>Rolutu Tires</p>
      </div>
      <div className={styles.title}>
        <ChevronLeft className={styles.icon} onClick={() => navigate(-1)}/>
        <h1 >Grenlander Winter Edge II Tire For Passenger & CUV</h1>
      </div>
      <div className={styles.body}>
        <img className={styles.tireImg} src={tire} alt={"Tire"} />
        <div className={styles.tireDescription}>
          <h1>$110.74</h1>
          <h4>Specification</h4>
          <p>Size: 175/65R15 84T</p>
          <p>Part: #1032927</p>
          <p>Part Number: 1032927</p>
          <p>Aspect Ratio Percent: 65.00</p>
          <p>Exclusive Winter Use: Y</p>
          <p>Load Index - Single:	84</p>
          <p>Load Range: SL</p>
          <p>M+S Rated:	Y</p>
          <p>Maximum Inflation Pressure: 51 psi</p>
          <p>Ply Rating: 4</p>
          <p>Prefix Code:	EURO-METRIC</p>
          <p>Run Flat: N</p>
        </div>
        <div className={styles.verticalDivider} />
        <div className={styles.formContainer}>
          <form className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>Phone Number</label>
              <TextInput className={styles.input} value={phoneNumber} placeholder={'Phone Number'}/>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>Email</label>
              <TextInput className={styles.input} value={email} placeholder={'Email'}/>
            </div>
            <small>
              We will contact you to finalize the transaction within 1-3 business days
            </small>
            <Button className={styles.formButton} label={'Send'}/>
          </form>
        </div>
      </div>
    </div>
  );
}



