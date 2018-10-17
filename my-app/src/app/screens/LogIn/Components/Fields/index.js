import React from 'react';

import styles from './styles.scss';

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div className={styles.customInputContainer}>
      <input className={styles.Input} {...props.input} type={props.type} />
      <label className={styles.Label}>{props.label}</label>
      {meta.error &&
        meta.touched &&
        !meta.active && <div className={styles.errorText}> {props.label + meta.error}</div>}
    </div>
  );
};
