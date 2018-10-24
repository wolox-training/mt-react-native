import { StyleSheet } from 'react-native';
import colors from '../../Utils/Consts/colors';

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 2,
    borderTopColor: colors.borderTopColor,
    backgroundColor: colors.backgroundColor,
    padding: 20
  },
  footText: {
    textAlign: 'center',
    color: colors.footTextColor
  }
});

export default styles;
