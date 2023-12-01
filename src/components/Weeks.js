// Weeks.js
import React from 'react';
import styles from "./Weeks.module.css";

const Weeks = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM'];

  const getFormattedDate = (dayOffset) => {
    const today = new Date();
    const currentDayIndex = today.getDay()-1; // 0 for Sunday, 1 for Monday, etc.
    const difference = dayOffset - currentDayIndex;
    
    today.setDate(today.getDate() + difference);
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based
    return `${day}/${month}`;
  };

  return (
    <div>
      {daysOfWeek.map((day, index) => (
        <div key={index} className={styles.weekContainer}>
          <div className={`${styles.leftDiv}`}>
            {day}
            <br />
            {getFormattedDate(index)}
          </div>
          <div className={`${styles.rightDiv}`}>
            {index >= 0 && (
              // Only show time slots for today and future weekdays
              timeSlots.map((time, timeIndex) => (
                <div key={timeIndex} className={styles.checkbox}>
                  {time}
                  <input type="checkbox" />
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Weeks;
