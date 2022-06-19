import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {zipSelector} from '../../store/selectors/zipSelector';

import ZipDetails from './ZipDetails';
import ZipPlaceholder from './ZipPlaceholder';

import {RootState} from '../../store/types';
import {ZipResult} from '../../types';
import styles from './styles';

interface Props {
  isLoading: boolean;
  error: string;
  zipInfo: ZipResult;
}

const ZipInfo: React.FC<Props> = ({isLoading, error, zipInfo}) => {
  return (
    <View>
      {isLoading && <ZipPlaceholder />}
      {!isLoading && !!error && <Text style={styles.errorStyle}>{error}</Text>}
      {!isLoading && !error && <ZipDetails data={zipInfo} />}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  ...zipSelector(state),
});

export default connect(mapStateToProps)(ZipInfo);
