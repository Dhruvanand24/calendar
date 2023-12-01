// Navbar.js
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Navbar = ({ onWeekChange }) => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const handlePrevWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek - 1);
    onWeekChange(currentWeek - 1);
  };

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
    onWeekChange(currentWeek + 1);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.prev} onClick={handlePrevWeek}><FaArrowLeft />Previous Week</div>
      <div className={styles.date}>{formattedDate}</div>
      <div className={styles.next} onClick={handleNextWeek}>Next Week<FaArrowRight /></div>
    </div>
  );
}

export default Navbar;

