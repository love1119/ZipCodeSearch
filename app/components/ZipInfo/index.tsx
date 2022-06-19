import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {zipSelector} from '../../store/selectors/zipSelector';

import ZipDetails from './ZipDetails';

import {RootState} from '../../store/types';
import {ZipResult} from '../../types';

interface Props {
  isLoading: boolean;
  error: string;
  zipInfo: ZipResult;
}

const ZipInfo: React.FC<Props> = ({isLoading, error, zipInfo}) => {
  return <View>{!isLoading && <ZipDetails data={zipInfo} />}</View>;
};

const mapStateToProps = (state: RootState) => ({
  ...zipSelector(state),
});

export default connect(mapStateToProps)(ZipInfo);
