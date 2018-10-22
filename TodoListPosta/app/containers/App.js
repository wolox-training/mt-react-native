import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Platform, Text, View} from 'react-native';

import Title from '../components/title';
import Footer from '../components/footer';
import List from '../components/list';
import Input from '../components/input';
import actionCreators from '../redux/actions';
import styles from './styles';
import strings from '../Utils/Strings';

class TodoApp extends Component {
  removeCompleted = () => {
    this.props.dispatch(actionCreators.removeCompleted());
  };

  toggleItemCompleted = index => {
    this.props.dispatch(actionCreators.toggleItemCompleted(index));
  };

  onRemoveItem = index => {
    this.props.dispatch(actionCreators.removeItem(index));
  };

  addItem = item => {
    this.props.dispatch(actionCreators.addItem(item));
  };

  render() {
    return (
      <View style={styles.container}>
        <Title> {strings.title} </Title>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider} />
        <List
          items={this.props.items}
          onToggleItemCompleted={this.toggleItemCompleted}
          onRemoveItem={this.onRemoveItem}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted}> {strings.footer} </Footer>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(TodoApp);
