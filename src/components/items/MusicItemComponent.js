import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {wp, hp, useOrientation, wpFull} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import ButtonBaseComponent from '../buttons/ButtonBaseComponent';

const ITEM_WIDTH = 56;
const ITEM_HEIGHT = 56;

const MusicItemComponent = props => {
  const {item, onPress} = props;

  const orientation = useOrientation();

  const {Colors} = useTheme();
  const styles = Styles(Colors, orientation);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <View style={styles.rowLeft}>
            <View style={styles.imageView}>
              <Image source={{uri:item.thumbUrl}} style={styles.image} />
              

              <TouchableOpacity style={styles.playIcon}>
                <Entypo
                  name="controller-play"
                  size={hp(19)}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.textView}>
              <Text style={styles.name}>{item.artistName}</Text>
              <Text style={styles.artist}>{item.artistName}</Text>
              <Text style={styles.musicType}>
                {'#'}
                {item.tags[0]}
              </Text>
            </View>
          </View>

          <View style={styles.rowRight}>
            <ButtonBaseComponent
              title={'Choose'}
              containerStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MusicItemComponent;

const Styles = (Colors, Orientation) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: wp(375, Orientation.isPortrait),
      height: hp(ITEM_HEIGHT),
      marginVertical: hp(10),

      alignItems: 'center',
    },
    content: {
      flexDirection: 'row',
    },
    rowLeft: {
      width: wp(275, Orientation.isPortrait),
      flexDirection: 'row',
      alignItems: 'center',
      //  backgroundColor: 'blue',
    },
    rowRight: {
      width: wp(80, Orientation.isPortrait),
      justifyContent: 'center',
      alignItems: 'flex-end',
      //  backgroundColor: 'cyan',
    },
    imageView: {
      width: hp(ITEM_WIDTH),
      height: hp(ITEM_HEIGHT),
      borderRadius: hp(15),
      paddingHorizontal: hp(3),
      paddingVertical: hp(3),
      borderColor: Colors.borderColor,
      borderWidth: 1,
    },
    textView: {
      height: hp(45),
      justifyContent: 'space-between',
      marginLeft: wp(10),
      // backgroundColor:'red'
    },
    image: {
      width: hp(48),
      height: hp(48),
      borderRadius: hp(12),
    },
    playIcon: {
      width: hp(40),
      height: hp(40),
      position: 'absolute',
      top: hp(5),
      left: hp(7),
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: FontSize(13), //13
      fontFamily: Fonts.bold,
      color: Colors.titleColor,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    artist: {
      fontSize: FontSize(11),
      color: Colors.subTitleColor,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    musicType: {
      fontSize: FontSize(11),
      color: Colors.subTitleColor,
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
    buttonStyle: {
      backgroundColor: Colors.buttonColor,
      alignSelf: 'flex-end',
    },
  });
