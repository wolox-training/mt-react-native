import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View} from 'react-native';

import Title from '../components/title/index';
import Footer from '../components/footer/index';
import List from '../components/list/index';
import Input from '../components/input/index';
import actionCreators from '../redux/actions';

// const items = [{
//   label: 'Check email',
//   completed: true
//   } , {
//   label: 'Take a shower',
//   completed: false
//   } , {
//   label: 'Brush teeth',
//   completed: false
//   } , {
//   label: 'Eat breakfast',
//   completed: false
//   } , {
//   label: 'Take a shower',
//   completed: true
//   } , {
//   label: 'Brush teeth',
//   completed: false
//   } , {
//   label: 'Eat breakfast',
//   completed: true
// }];

class TodoApp extends Component {
  removeCompleted = () => {
    // console.warn('remove all');
    this.props.dispatch(actionCreators.removeCompleted());
  }

  toggleItemCompleted = (index) => {
    // console.warn('item toggled!' + index);
    this.props.dispatch(actionCreators.toggleItemCompleted());
  }

  onRemoveItem = (index) => {
    // console.warn('item removed!' + index);
    this.props.dispatch(actionCreators.removeItem());
  }

  addItem = (index) => {
    // console.warn('submitting item');
    this.props.dispatch(actionCreators.addItem());
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={this.props.items}
          onToggleItemCompleted={this.toggleItemCompleted}
          onRemoveItem={this.onRemoveItem}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted}> Remove Completed Items </Footer> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  }
});

const mapStateToProps = state => ({
  items: state.items
})

export default connect(mapStateToProps)(TodoApp);
