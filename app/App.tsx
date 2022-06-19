import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';

import ZipInput from './components/ZipInput';
import ZipInfo from './components/ZipInfo';

import styles from './styles';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.containerStyle}>
          <ZipInput />
          <ZipInfo />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
