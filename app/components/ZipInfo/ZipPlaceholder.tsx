import React from 'react';
import {View} from 'react-native';

import styles from './styles';

const ZipPlaceholder = () => {
  return (
    <View style={styles.zipPlaceholder}>
      <View style={styles.placeholder} />
      <View style={styles.placeholder} />
      <View style={styles.placeholder} />
    </View>
  );
};

export default ZipPlaceholder;
