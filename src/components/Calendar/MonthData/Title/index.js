import React from 'react';
import styles from './Title.module.scss';
import { format } from 'date-fns';


const Title = (props) => {
  const {data} = props;

  return (
    <>
      <h2 className={styles.title}>{format(data, 'MMMM 	yyy')}</h2>
    </>
  );
}

export default Title;
