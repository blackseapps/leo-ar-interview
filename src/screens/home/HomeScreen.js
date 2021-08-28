import React, {useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {HeaderCustomOptions} from '../../navigations/NavigationHeaderOptions';
import MusicListComponent from '../../components/listing/MusicListComponent';
import {musicListData} from '../../data/data';
import HomeStyles from './Home.styles';
import CancelButton from '../../views/header/left/CancelButton';
import DoneButton from '../../views/header/right/DoneButton';
import MusicCategoriesListComponent from '../../components/listing/MusicCategoriesListComponent';
import {DataFilter} from '../../data/DataHelpers';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = HomeStyles(Colors);

  const [selectedCategory, setCategory] = useState('All');

  navigation.setOptions(
    HeaderCustomOptions(
      'Choose Music',
      Colors.primary,
      Colors.primaryText,
      [<CancelButton />],
      [<DoneButton />],
    ),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MusicCategoriesListComponent
          data={musicListData}
          onChangeValue={value => setCategory(value)}
        />

        <MusicListComponent
          data={DataFilter(musicListData, 'musicType', selectedCategory)}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
