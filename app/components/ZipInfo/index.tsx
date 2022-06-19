import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {zipSelector} from '../../store/selectors/zipSelector';

import {RootState} from '../../store/types';
import {ZipResult} from '../../types';

interface Props {
  isLoading: boolean;
  error: string;
  zipInfo: ZipResult;
}

const ZipInfo = ({isLoading, error, zipInfo}: Props) => {
  console.log('******* isLoading ', isLoading);
  console.log('******* error ', error);
  console.log('******* zipInfo ', zipInfo);

  return <View></View>;
};

const mapStateToProps = (state: RootState) => ({
  ...zipSelector(state),
});

export default connect(mapStateToProps)(ZipInfo);
