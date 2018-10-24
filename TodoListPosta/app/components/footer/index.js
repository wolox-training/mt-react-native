import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

function Footer({ onRemoveCompleted, children }) {
  return (
    <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
      <Text style={styles.footText}>{children}</Text>
    </TouchableOpacity>
  );
}

export default Footer;
