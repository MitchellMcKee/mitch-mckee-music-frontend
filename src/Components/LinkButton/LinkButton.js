import React from 'react';
import styles from './LinkButton.module.css'

function LinkButton(props){
  return (
    <button className={`${styles.linkButton}`}>
        <div>
          <a className={`${styles.linkButtonText}`} >{props.text}</a>
        </div>
    </button>
  );
}

export default LinkButton;
