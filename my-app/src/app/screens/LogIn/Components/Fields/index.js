import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

export const customInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div className={cx(styles.customInputContainer)}>
      <input {...props.input} type={props.type} />
      <label>{props.label}</label>
      {meta.error &&
        meta.touched &&
        !meta.active && <div className={cx(styles.errorText)}> {props.label + meta.error}</div>}
    </div>
  );
};
