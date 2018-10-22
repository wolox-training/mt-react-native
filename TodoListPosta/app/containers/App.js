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
  render() {
    return (
      <View style={styles.container}>
        <Title> {strings.title} </Title>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.props.addItem}
        />
        <View style={styles.divider} />
        <List
          items={this.props.items}
          onToggleItemCompleted={this.props.toggleItemCompleted}
          onRemoveItem={this.props.onRemoveItem}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.props.removeCompleted}> {strings.footer} </Footer>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  removeCompleted: () => {
    dispatch(actionCreators.removeCompleted());
  },
  toggleItemCompleted: index => {
    dispatch(actionCreators.toggleItemCompleted(index));
  },
  onRemoveItem: index => {
    dispatch(actionCreators.removeItem(index));
  },
  addItem: item => {
    dispatch(actionCreators.addItem(item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
