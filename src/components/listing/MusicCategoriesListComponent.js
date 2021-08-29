import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {wp, hp, useOrientation} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';
import MusicCategoriesItemComponent from '../items/MusicCategoriesItemComponent';
import {DataGroup} from '../../data/DataHelpers';

const MusicCategoriesListComponent = props => {
  const {data, style, onChangeValue} = props;

  const orientation = useOrientation();

  const {Colors} = useTheme();
  const styles = Styles(Colors, orientation);

  const [selectedItem, setItem] = useState({id: 0});

  const onSelectItem = item => {
    setItem(item);
    onChangeValue(item.musicType);
  };

  const renderItem = ({item}) => {
    return (
      <MusicCategoriesItemComponent
        item={item}
        onPress={onSelectItem}
        selectedItem={selectedItem}
      />
    );
  };

  return (
    <View style={[styles.container, style]}>
      <FlatList
        data={DataGroup(data, 'tags')}
        style={styles.musiclist}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MusicCategoriesListComponent;

const Styles = (Colors, Orientation) =>
  StyleSheet.create({
    container: {
      width: wp(375, Orientation, true),
      height: hp(45),

      backgroundColor: Colors.white,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    musiclist: {
      width: '100%',

      flexGrow: 1,
    },
  });
