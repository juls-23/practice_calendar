import React from 'react';
import styles from './Buttons.module.scss';

const  Buttons = (props) => {

const { setDate } = props

    return (
      <div className={styles.btnContainer}>
        <button  onClick={() => { setDate({ months: -1 }) }}>&lArr;</button>
        <button  onClick={() => { setDate({ months: 1 }) }}>&rArr;</button>
      </div>
    );
}



export default Buttons;
