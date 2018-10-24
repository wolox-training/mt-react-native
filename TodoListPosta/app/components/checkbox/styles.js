import { StyleSheet } from 'react-native';
import colors from '../../Utils/Consts/colors';

const styles = StyleSheet.create({
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: colors.boxBorderColor
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: colors.checkboxBackgroundColor
  }
});

export default styles;
