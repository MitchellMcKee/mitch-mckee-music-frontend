import React from 'react';
import styles from './LinkButtonGroup.module.css'
import LinkButton from '../LinkButton/LinkButton';

function LinkButtonGroup(){
  const categories = [
    'Software',
    'Music',
    'Outdoors'
  ];

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category, ind) => {
      return <div className={styles.section}> <LinkButton key={ind}>{category}</LinkButton> </div>
    })}
    </div>
  );
}

export default LinkButtonGroup;
