import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {},
  labelStyle: {
    width: 100,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
  },
  valueStyle: {
    fontSize: 16,
    marginTop: 16,
    marginLeft: 16,
  },
  placeRowStyle: {
    flexDirection: 'row',
  },
  rowLabelStyle: {
    width: 100,
    fontSize: 16,
    marginLeft: 16,
    marginTop: 16,
    textTransform: 'capitalize',
  },
  rowValueSstyle: {
    fontSize: 16,
    marginLeft: 32,
    marginTop: 16,
  },
  zipPlaceholder: {
    marginTop: 16,
  },
  placeholder: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    width: '90%',
    height: 32,
    minHeight: 32,
    backgroundColor: '#cccccc',
  },
});

export default styles;
