import { StyleSheet } from 'react-native';
import colors from '../../Utils/Consts/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.titleColor,
    padding: 40
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.backgroundColor
  }
});

export default styles;
