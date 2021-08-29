import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {wp, hp, wpFull} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonBaseComponent from '../buttons/ButtonBaseComponent';

const ITEM_WIDTH = 56;
const ITEM_HEIGHT = 56;

const MusicCategoriesItemComponent = props => {
  const {item, onPress, selectedItem} = props;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const [isSelect, setSelect] = useState(false);

  useEffect(() => {
    if (selectedItem.id === item.id) {
      setSelect(true);
    } else setSelect(false);
  }, [selectedItem.id]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.content, isSelect && styles.isActive]}
        onPress={() => onPress(item)}>
        {isSelect ? (
          <Text style={styles.musicTypeActive}>{item.musicType}</Text>
        ) : (
          <Text style={styles.musicType}>{item.musicType}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default MusicCategoriesItemComponent;

const Styles = (Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: hp(45),
    },
    content: {
      height: hp(45),
      paddingHorizontal: wp(10),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    musicTypeActive: {
      fontSize: FontSize(12),
      fontFamily: Fonts.medium,
      color: Colors.primaryText,
      paddingVertical: 0,
      paddingHorizontal: 0,
      textTransform: 'capitalize',
    },
    musicType: {
      fontSize: FontSize(12),
      fontFamily: Fonts.medium,
      color: Colors.subTitleColor,
      paddingVertical: 0,
      paddingHorizontal: 0,
      textTransform: 'capitalize',
    },
    isActive: {
      borderBottomWidth: 1.5,
      borderColor: Colors.categoryListBottomColor,
    },
  });
