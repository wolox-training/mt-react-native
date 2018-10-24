import { StyleSheet } from 'react-native';
import colors from '../Utils/Consts/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderBottomColor
  }
});

export default styles;
