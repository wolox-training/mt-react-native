import { createStackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import TodoList from '../containers/App';
import Books from '../containers/Books';
import colors from '../Utils/Consts/colors';

const BooksNav = createStackNavigator(
  {
    Home: Books
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.titleColor
      },
      headerTintColor: colors.backgroundColor,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const TodoNav = createStackNavigator(
  {
    home: TodoList
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.titleColor
      },
      headerTintColor: colors.backgroundColor,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default TabNavigator(
  {
    Home: BooksNav,
    TodoList: TodoNav
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

// export default TodoStack;
