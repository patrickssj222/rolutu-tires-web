import styles from './FindTireForm.module.scss'
import {TextInput} from "components/Input/TextInput";
import {useState} from "react";
import FindYourTireTutorial from 'assets/img/FindYourTireTutorial.png';
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
          <p>Find Your Tire</p>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <p>Width</p>
            <TextInput value={width} placeholder={'Width'} onTextChange={(string) => setWidth(string)}/>
          </div>
          <div className={styles.formGroup}>
            <p>Profile</p>
            <TextInput value={profile} placeholder={'Profile'} onTextChange={(string) => setProfile(string)}/>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <p>Wheel Size</p>
            <TextInput value={wheelSize} placeholder={'Wheel Size'} onTextChange={(string) => setWheelSize(string)}/>
          </div>
          <div className={styles.formGroup}>
            <p>Load Index</p>
            <TextInput value={loadIndex} placeholder={'Load Index'} onTextChange={(string) => setLoadIndex(string)}/>
          </div>
        </div>
        <div>
          <p>Speed Rating</p>
          <TextInput value={speedRating} placeholder={'Speed Rating'} onTextChange={(string) => setSpeedRating(string)}/>
        </div>
      </form>
      <img className={styles.img} src={FindYourTireTutorial}/>
    </div>
  );
}
