import {StyleSheet} from 'react-native';
import {Theme} from '../../utils/theme';

const styles = StyleSheet.create({
  btn_linear: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  btn_start: {
    backgroundColor: Theme.primary,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
  },
  user_img: {
    marginHorizontal: 8,
  },
  btn_text: {
    color: Theme.white,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
  },
});

export default styles;
