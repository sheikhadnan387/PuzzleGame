import {StyleSheet} from 'react-native';
import {height_screen, width_screen} from '../../utils/dimensions';
import {Theme} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  question: {
    fontSize: 20,
    marginVertical: height_screen * 0.05,
    color: Theme.white,
  },
  name: {
    fontSize: 32,
    marginVertical: height_screen * 0.02,
    color: Theme.white,
    fontWeight: '700',
  },
  lettersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  letter: {
    padding: 15,
    margin: 5,
    width: 50,
    backgroundColor: Theme.white,
    alignItems: 'center',
    borderRadius: 8,
  },
  letterText: {
    fontSize: 17,
    color: Theme.black,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 24,
    color: 'green',
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: Theme.gold,
    padding: 15,
    margin: 5,
    width: 50,
    textAlign: 'center',
    color: Theme.white,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 8,
  },
  btn_inner: {
    height: 60,
    justifyContent: 'center',
  },
  btn: {
    width: width_screen * 0.6,
    padding: 2,
    alignSelf: 'center',
    marginVertical: height_screen * 0.01,
  },
  btn_text: {
    color: Theme.white,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
});

export default styles;
