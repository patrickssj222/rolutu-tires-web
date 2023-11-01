import styles from './FindTireForm.module.scss'
import {TextInput} from "components/Input/TextInput";
import {useState} from "react";
import FindYourTireTutorial from 'assets/img/FindYourTireTutorial.png';
import {Button} from "components/Button/Button";
export const FindTireForm = () => {
  const [width, setWidth] = useState('');
  const [profile, setProfile] = useState('');
  const [wheelSize, setWheelSize] = useState('');
  const [loadIndex, setLoadIndex] = useState('');
  const [speedRating, setSpeedRating] = useState('');
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.header}>
          <h4 className={styles.headerText}>Find Your Tire</h4>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Width</label>
            <TextInput className={styles.input} value={width} placeholder={'Width'} onTextChange={(string) => setWidth(string)}/>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Profile</label>
            <TextInput className={styles.input} value={profile} placeholder={'Profile'} onTextChange={(string) => setProfile(string)}/>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Wheel Size</label>
            <TextInput className={styles.input} value={wheelSize} placeholder={'Wheel Size'} onTextChange={(string) => setWheelSize(string)}/>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Load Index</label>
            <TextInput className={styles.input} value={loadIndex} placeholder={'Load Index'} onTextChange={(string) => setLoadIndex(string)}/>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.inputLabel}>Speed Rating</label>
            <TextInput className={styles.input} value={speedRating} placeholder={'Speed Rating'} onTextChange={(string) => setSpeedRating(string)}/>
          </div>
        </div>
        <div className={styles.formButtonWrapper}>
          <Button className={styles.formButton} type={"submit"} label={"Find Tire"}/>
        </div>
      </form>
      <img className={styles.img} src={FindYourTireTutorial}/>
    </div>
  );
}
