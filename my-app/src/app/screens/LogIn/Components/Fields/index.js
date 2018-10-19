import React from 'react';

import styles from './styles.scss';

function CustomInput({ label, input, type, meta }) {
  return (
    <div className={styles.customInputContainer}>
      <input className={styles.input} {...input} type={type} />
      <label className={styles.label}>{label}</label>
      {meta.error &&
        meta.touched &&
        !meta.active && <div className={styles.errorText}> {label + meta.error}</div>}
    </div>
  );
};

export default CustomInput;
