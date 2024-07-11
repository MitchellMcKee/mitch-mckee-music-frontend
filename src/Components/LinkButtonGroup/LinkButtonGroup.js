import React from 'react';
import styles from './LinkButtonGroup.module.css'
import LinkButton from '../LinkButton/LinkButton';

function LinkButtonGroup(props){
  return (
    <div className={styles.categoriesContainer}>
      {props.categories.map((category, ind) => {
      return <div className={styles.section}> <LinkButton text={category} key={ind}></LinkButton> </div>
    })}
    </div>
  );
}

export default LinkButtonGroup;
