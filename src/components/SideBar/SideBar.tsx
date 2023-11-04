import {Button} from "components/Button/Button";
import styles from "./SideBar.module.scss";
import {TextInput} from "components/Input/TextInput";
import {useState} from "react";

export const SideBar = () => {
  const [width, setWidth] = useState('');
  const [profile, setProfile] = useState('');
  const [wheelSize, setWheelSize] = useState('');
  const [loadIndex, setLoadIndex] = useState('');
  const [speedRating, setSpeedRating] = useState('');
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h4 className={styles.title}>Specification</h4>
      </div>
      <div className={styles.formWrapper}>
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
        <Button className={styles.formButton} label={'Search'}/>
      </div>
    </div>
  )
}
