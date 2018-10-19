import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import styles from './styles';

function Checkbox(props) {
  return (
    <TouchableOpacity onPress={props.onToggle}>
    <View style={styles.box}>
        { props.isChecked && <View style={styles.inner}/> }
    </View>
    </TouchableOpacity>
  )
};

export default Checkbox;
