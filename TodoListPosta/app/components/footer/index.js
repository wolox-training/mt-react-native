import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles';

function Footer(props) {
  return (
    <TouchableOpacity style={styles.footer} onPress={props.onRemoveCompleted}>
      <Text style={styles.footText}>{props.children}</Text>
    </TouchableOpacity>
  ) 
}

export default Footer;
