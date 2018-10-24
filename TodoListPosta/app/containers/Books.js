import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Books extends Component {
  static navigationOptions = {
    title: 'Books'
  };

  handleClick = () => this.props.navigation.navigate('Books');

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={this.handleClick} title="Go to Todo List!" />
      </View>
    );
  }
}

export default Books;
