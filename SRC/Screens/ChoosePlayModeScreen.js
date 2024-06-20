import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import Modal from 'react-native-modal';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import * as Animateable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const ChoosePlayModeScreen = ({ navigation }) => {
  // const navigation= useNavigation();
  const playModes = [
    { id: 1, image: require('../Assets/Images/card1.png'), btnText: 'Play 1 On 1', onPress: () => { navigation.navigate('GamePlayScreen',  ) }},
    { id: 2, image: require('../Assets/Images/card2.png'), btnText: 'Play With Friends', onPress: () => { navigation.navigate('GamePlayScreen') }},
    { id: 3, image: require('../Assets/Images/card3.png'), btnText: 'Play Special', onPress: () => { navigation.navigate('GamePlayScreen') } },
    { id: 4, image: require('../Assets/Images/card4.png'), btnText: 'Play Offline', onPress: () => { navigation.navigate('GamePlayScreen') }},
  ];
  const modalData = [
    {id: 1, name: 'Coins', onPress: () => {}},
    {id: 2, name: 'Free Rewards', onPress: () => {}},
    {id: 3, name: 'Shop', onPress: () => {}},
  ];
  const zoomIn = {
    0: {
      scale: 0.92,
    },
    1: {
      scale: 1.02,
    },
  };
  
  const zoomOut = {
    0: {
      scale: 1.04,
    },
    1: {
      scale: 0.9,
    },
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(playModes[1]);

  const viewableItemsChanged = ({viewableItems}) => {
    console.log("🚀 ~ viewableItemsChanged ~ viewableItems:", viewableItems[0].key)
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };
  return (
    <ImageBackground
      source={require('../Assets/Images/Bg6.jpg')}
      style={{
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -1,
      }}>
        {/* header */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            gap: moderateScale(12, 0.2),
            alignItems: 'center',
          }}>
          <View
            style={{
              width: moderateScale(40, 0.2),
              height: moderateScale(40, 0.2),
              backgroundColor: Color.green,
              borderColor: 'white',
              borderWidth: 2,
              overflow: 'hidden',
              borderRadius: moderateScale(40, 0.2) / 2,
            }}>
            <CustomImage
              source={require('../Assets/Images/animated.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              borderRadius: moderateScale(6, 0.2),
              gap: moderateScale(5, 0.2),
            }}>
            <CustomText isBold style={{color: 'white'}}>
              Your Name
            </CustomText>
            <View
              style={{
                backgroundColor: 'white',
                width: moderateScale(60, 0.7),
                borderRadius: moderateScale(21, 0.2),
                overflow: 'hidden',
                height: moderateScale(4, 0.2),
              }}>
              <View
                style={{
                  backgroundColor: '#FFC400',
                  width: '60%',
                  height: '100%',
                }}></View>
            </View>
          </View>
        </View>
        <CustomImage
          source={require('../Assets/Images/star.png')}
          style={{
            position: 'absolute',
            left: -206,
            top: 0,
            //  zIndex:1,
            width: moderateScale(30, 0.2),
            height: moderateScale(30, 0.2),
          }}
        />
        <LinearGradient
          style={{
            width: moderateScale(40, 0.2),
            height: moderateScale(40, 0.2),
            backgroundColor: Color.green,
            borderRadius: moderateScale(40, 0.2) / 2,
          }}
          colors={['#afeffa', '#e4f2f7']}
          start={{x: 0.6, y: 1}}
          end={{x: 1, y: 0}}>
          <CustomImage
            style={{
              width: moderateScale(40, 0.2),
              height: moderateScale(40, 0.2),
            }}
            onPress={() => {
              setModalVisible(true);
            }}
            source={require('../Assets/Images/teasure.png')}
          />
        </LinearGradient>
      </View>
 {/* logo (Young Kid avatar) */}
      <View
        style={{zIndex: 1, position: 'absolute', top: moderateScale(50, 0.3)}}>
        <CustomImage source={require('../Assets/Images/youngBoyLogo.png')} />
      </View>
 {/* playModes List bg box */}
      <LinearGradient
        style={styles.box}
        start={{x: 0, y: 0}}
        end={{x: 0.6, y: 1}}
        colors={['#d2eff7', '#a8e6f7']}></LinearGradient>
     {/* play Modes List */}
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.5,
          paddingTop:moderateScale(20,0.2),
          zIndex: 1,
        }}>
        <FlatList
          data={playModes}
          // scrollEnabled
          horizontal
          // showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.id}
          renderItem={({item}) => (
            <Animateable.View
              animation={activeItem == item?.id ? zoomIn : zoomOut}
              duration={500}
              style={{
                width: windowWidth * 0.5,
                height: windowHeight * 0.4,
                // borderColor: '#2D88B7',
                alignItems: 'center',
                // marginHorizontal: moderateScale(7, 0.2),
                // borderWidth:4,
                borderRadius: moderateScale(20, 0.2),
              }}>

              <CustomImage
                source={item?.image}
                style={{margin: moderateScale(10, 0.2)}}
                onPress={item?.onPress}
              />
              <TouchableOpacity
                onPress={item?.onPress}
                style={{
                  width: windowWidth * 0.34,
                  height: windowHeight * 0.08,
                  borderColor: '#2D88B7',
                  borderWidth: 2,
                  backgroundColor: 'white',
                  borderRadius: moderateScale(19, 0.2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: moderateScale(20, 0.2),
                  elevation: 20,
                }}>
                <CustomText
                  numberOfLines={2}
                  isBold
                  style={{
                    // fontWeight: 900,
                    color: '#2D88B7',
                    width: windowWidth * 0.2,
                    textAlign: 'center',
                  }}>
                  {item?.btnText}
                </CustomText>
              </TouchableOpacity>
            </Animateable.View>
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          contentOffset={{x: 100}}
        />
      </View>
    {/* menu modal */}
      <Modal
        visible={modalVisible}
        onBackdropPress={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            width: windowWidth * 0.35,
            top: 0,
            // right: 0,
            position: 'absolute',
            alignSelf: 'flex-end',
            alignItems: 'center',
            borderRadius: moderateScale(10, 0.6),
            // backgroundColor: 'rgba(225,225,225,.5)',
            backgroundColor: 'transparent',
            // shadowColor: '#000',
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,
            // elevation: 5,
          }}>
          {/* <CustomText style={{fontSize:moderateScale(20,.6)}}>Hello</CustomText> */}
          {modalData.map(item => {
            return (
              <>
                <CustomText
                  isBold
                  style={{
                    fontSize: moderateScale(9, 0.6),
                    color: 'white',
                    paddingVertical: moderateScale(5, 0.6),
                  }}
                  onPress={item?.onPress}>
                  {item?.name}
                </CustomText>
                {/* <View
                  style={{
                    width: windowWidth * 0.25,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    height: 2,
                  }}></View> */}
              </>
            );
          })}
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ChoosePlayModeScreen;

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    bottom: moderateScale(25, 0.2),
    left: moderateScale(40, 0.3),
    zIndex: 0,
    paddingVertical: moderateScale(12, 0.2),
    width: windowWidth * 0.81,
    height: windowHeight * 0.5,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(10, 0.1),
    borderRadius: moderateScale(30, 0.2),
    borderWidth: moderateScale(1, 0.2),
  },
  header: {
    width: windowWidth,
    paddingHorizontal: moderateScale(11, 0.2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(11, 0.2),
  },
});
