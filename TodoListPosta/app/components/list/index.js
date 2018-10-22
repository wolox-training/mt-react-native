import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import Checkbox from '../checkbox/index';
import styles from './styles';

class List extends Component {
  renderItem = ({ item, index }) => {
    const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item;

    return (
      <View key={index} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={item.completed}
            onToggle={() => this.props.onToggleItemCompleted(index)}
          />
          <TouchableOpacity onPress={() => this.props.onRemoveItem(index)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  keyExtractor = item => item.label + item.completed;

  render() {
    return (<FlatList data={this.props.items} renderItem={this.renderItem} keyExtractor={this.keyExtractor}/>);
  }
}

export default List;
