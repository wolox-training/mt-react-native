import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Checkbox from '../checkbox/index';
import styles from './styles';

class List extends Component {
  renderItem = (item, i) => {
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;

    return (
      <View key={i} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={item.completed}
            onToggle={() => this.props.onToggleItemCompleted(i)}
          />
          <TouchableOpacity onPress={() => this.props.onRemoveItem(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.items.map(this.renderItem)}
      </ScrollView>
    );
  }
}

export default List;
