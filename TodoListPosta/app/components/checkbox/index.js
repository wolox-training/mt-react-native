import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

function Checkbox({ onToggle, isChecked }) {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={styles.box}>
        {isChecked && <View style={styles.inner}/>}
      </View>
    </TouchableOpacity>
  );
}

export default Checkbox;
