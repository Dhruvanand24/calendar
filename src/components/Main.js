// Main.js
import React, { useState } from 'react';
import styles from "./Main.module.css";
import Weeks from './Weeks';

const Main = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC-0');

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone);
    // You can add logic here to handle the timezone change
  };

  return (
    <div className={styles.Main}>
      <div className={styles.dropdown}>
        <button className={styles.dropdownbtn}>
          Timezone: {selectedTimezone}
        </button>
        <div className={styles.dropdowncontent}>
          <div className={styles.dropdownoption} onClick={() => handleTimezoneChange('UTC-0')}>
            UTC-0
          </div>
          <div className={styles.dropdownoption} onClick={() => handleTimezoneChange('UTC-1')}>
            UTC-1
          </div>

        </div>
      </div>
      <div>
        <Weeks/>
      </div>
    </div>
  );
}

export default Main;
