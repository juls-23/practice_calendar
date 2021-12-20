import React from 'react';
import { eachDayOfInterval, format,  isWeekend,  lastDayOfMonth, startOfMonth, isToday} from 'date-fns';
import config from '../../../../config';
import styles from './CalendarTable.module.scss';
import cx from 'classnames';

const CalendarTable = (props) => {
  const {choosenDate} = props;
    
  const getcurrentMonthDays = () => {
  return eachDayOfInterval({start: startOfMonth(choosenDate), end:lastDayOfMonth(choosenDate)})
  }

  const getemptyCells = () => {
    const startMonth = format(startOfMonth(choosenDate),'i');
    return startMonth<7 || startMonth>1? new Array(Number(format(startOfMonth(choosenDate),'i'))-1) : []
  }

  const getDataTable = () => {
    return [...getemptyCells(choosenDate),...getcurrentMonthDays(choosenDate)]
  }

 
  const mapDaysNames = (day, i) => {
    return <li key={i} title={day} >{day.slice(0,2)}</li>
  }

  
  const mapDays = (day, i) => {
    return  day? <li className={cx({
      [styles.today]:isToday(day),
      [styles.weekend]:isWeekend(day)

    })} key={i} title={format(day,"dd MMMM yyyy cccc")}>{format(day, 'd')}</li> : <li  className={styles.emptyCells} key={i}></li>
  } 

  return (
    <>
      <ul className={styles.weekNames}>{config.WEEK_DAYS.map(mapDaysNames)}</ul>
      <ul className={styles.calendarDays}>{getDataTable().map(mapDays)}</ul>
    </>
  );
}

export default CalendarTable;
