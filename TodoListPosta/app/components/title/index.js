import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function Title(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

export default Title;
