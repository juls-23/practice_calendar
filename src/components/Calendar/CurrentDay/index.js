import React from 'react';
import { format } from 'date-fns';
import styles from './CurrentDay.module.scss';

const CurrentDay = (props) => {
  const {currentDate} = props;
  return (
    <article className={styles.currentDayWrapper}>
 
       <p className={styles.title}>{format(currentDate, 'EEEE')}</p>
       <p className={styles.currentDay}>{format(currentDate, 'dd')}</p>

    </article>
  );
}

export default CurrentDay;
