import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import useOrientation, {wp, hp} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';

import MusicItemComponent from '../items/MusicItemComponent';

const MusicListComponent = props => {
  const {data, style} = props;

  useEffect(() => {}, []);

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const [selectedItem, setItem] = useState();

  const onSelectItem = item => {
    setItem(item);
  };

  const renderItem = ({item}) => {
    if (item.isCategory === undefined)
      return <MusicItemComponent item={item} onPress={onSelectItem} />;
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={data}
        style={styles.musiclist}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MusicListComponent;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    musiclist: {
      width: '100%',
      flex: 1,
      flexGrow: 1,
    },
  });
