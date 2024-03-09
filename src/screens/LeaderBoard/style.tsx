import {StyleSheet} from 'react-native';
import {height_screen, width_screen} from '../../utils/dimensions';
import {Theme} from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: Theme.white,
    textTransform: 'uppercase',
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.gold,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.white,
  },
  score: {
    fontSize: 16,
    color: Theme.white,
  },
  date: {
    fontSize: 14,
    color: Theme.white,
  },
});

export default styles;
