/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import {connect} from 'react-redux';

import {getZipInfo} from '../../store/actions/ZipActions';

import styles from './styles';

interface Props {
  getZipInfo: Function;
}

const ZipInput: React.FC<Props> = ({getZipInfo}) => {
  const [value, setValue] = useState<string>('');

  const onSubmit = () => {
    getZipInfo(value);
  };

  return (
    <View style={styles.containerStyle}>
      <TextInput
        placeholder="Please input the valid Zip Code"
        keyboardType="numeric"
        style={styles.inputStyle}
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity
        disabled={!value}
        onPress={onSubmit}
        style={styles.searchButtonStyle}>
        <Text style={styles.searchTitleStyle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getZipInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZipInput);
