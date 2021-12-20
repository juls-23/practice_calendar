import React, { Component } from 'react';
import { add } from 'date-fns';
import styles from './MonthData.module.scss';
import Buttons from './Buttons';
import Title from './Title';
import CalendarTable from './CalendarTable'


class  MonthData extends Component{
 constructor(props) {
   super(props);
   this.state = {
     choosenDate: props.currentDate,
     
   }
 }  

  setDate = (options) =>{
    this.setState({ choosenDate: add(this.state.choosenDate, options) })
  }

 
  render(){
    const {choosenDate} = this.state;
    
      return (

        <article className={styles.container}>
          <Buttons choosenDate={choosenDate} setDate={this.setDate}/>
          <Title data={choosenDate}/>
          <CalendarTable choosenDate={choosenDate} setDate={this.setDate} />
        </article>
    
      );
  }

 
}

export default MonthData;
