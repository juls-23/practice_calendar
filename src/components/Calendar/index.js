import React, { Component } from 'react';
import MonthData from './MonthData';
import CurrentDate from './CurrentDay';
import styles from './Calendar.module.scss';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    }
  }  

  render() {
    const {currentDate} = this.state;
       return (
      <section className={styles.container}>
        <CurrentDate  currentDate={currentDate}/>
        <MonthData  currentDate={currentDate}  />
      </section>
    );
  }
}

export default Calendar;
