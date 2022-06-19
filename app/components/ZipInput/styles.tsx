import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    width: '100%',
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  searchButtonStyle: {
    width: 120,
    height: 40,
    backgroundColor: Colors.black,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  searchTitleStyle: {
    fontSize: 24,
    lineHeight: 36,
    margin: 0,
    color: Colors.white,
  },
});

export default styles;
