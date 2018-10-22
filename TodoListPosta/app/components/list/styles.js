import { StyleSheet } from 'react-native';
import colors from '../../Utils/Consts/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderBottomColor
  },
  completed: {
    backgroundColor: colors.borderBottomColor
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  remove: {
    marginLeft: 10,
    marginBottom: 2,
    color: colors.remover,
    fontSize: 26
  }
});

export default styles;
