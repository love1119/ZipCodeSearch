import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ZipResult, Place} from '../../types';
import styles from './styles';

interface Props {
  data: ZipResult;
}

interface PlaceRowProps {
  row: Place;
}

const PlaceRow: React.FC<PlaceRowProps> = ({row}: any) => {
  return (
    <View>
      {Object.keys(row).map((field: string) => (
        <View key={field} style={styles.placeRowStyle}>
          <Text style={styles.rowLabelStyle}>{`${field}:`}</Text>
          <Text style={styles.rowValueSstyle}>{row[field]}</Text>
        </View>
      ))}
    </View>
  );
};

const ZipDetails: React.FC<Props> = ({data}) => {
  const renderItem = ({item}: {item: Place}) => <PlaceRow row={item} />;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>Country:</Text>
      <Text style={styles.valueStyle}>{data.country}</Text>
      <Text style={styles.labelStyle}>Places:</Text>
      <FlatList
        data={data.places}
        renderItem={renderItem}
        keyExtractor={(item: Place) => item.longitude}
      />
    </View>
  );
};

export default ZipDetails;
