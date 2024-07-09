import React from 'react';
import styles from './LinkButton.module.css'

function LinkButton(){
  return (
    <button className={`${styles.linkButton}`}>
        <div>
          <a className={`${styles.linkButtonText}`} >Meet the Chef</a>
        </div>
    </button>
  );
}

export default LinkButton;
