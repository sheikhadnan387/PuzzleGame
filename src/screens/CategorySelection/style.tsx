import {StyleSheet} from 'react-native';
import {height_screen, width_screen} from '../../utils/dimensions';
import {Theme} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_container: {
    justifyContent: 'center',
    marginVertical: height_screen * 0.15,
  },
  btn_inner: {
    height: 60,
    justifyContent: 'center',
  },
  btn_selected: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  btn: {
    width: width_screen * 0.8,
    padding: 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
  startBtn: {
    width: width_screen * 0.8,
    padding: 2,
    alignSelf: 'center',
  },
  startBtn_inner: {
    height: 60,
    justifyContent: 'center',
    borderRadius: 8,
  },
  simple_text: {
    color: Theme.white,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: height_screen * 0.07,
  },
  leader_text: {
    color: Theme.white,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: height_screen * 0.03,
    textDecorationLine: 'underline',
  },
  btn_text: {
    color: Theme.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    textTransform: 'uppercase',
  },
});

export default styles;
