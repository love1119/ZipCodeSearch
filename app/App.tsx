import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';

import ZipInput from './components/ZipInput';
import ZipInfo from './components/ZipInfo';

// import useFetch from './hooks/useFetch';

import styles from './styles';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.containerStyle}>
          <ZipInput />
          <ZipInfo />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
