import React from 'react';

import styles from './styles.scss';

function customInput({ label, input, type, meta }) {
  return (
    <div className={styles.customInputContainer}>
      <input className={styles.Input} {...input} type={type} />
      <label className={styles.Label}>{label}</label>
      {meta.error &&
        meta.touched &&
        !meta.active && <div className={styles.errorText}> {label + meta.error}</div>}
    </div>
  );
};

export default customInput;
