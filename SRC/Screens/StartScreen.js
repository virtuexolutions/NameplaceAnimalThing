import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../Components/CustomButton';
import {position} from 'native-base/lib/typescript/theme/styled-system';

const StartScreen = () => {
  return (
    //   <ScreenBoiler

    //   >
    //       </ScreenBoiler>
    <ImageBackground
      source={require('../Assets/Images/startScreenBg.png')}
      style={{width: windowWidth, height: windowHeight}}>
      <View
        style={{
          width: windowWidth,
          height: windowHeight * 0.34,
          overflow: 'hidden',
        }}>
        <CustomImage
          source={require('../Assets/Images/mainLogo2.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>

      <CustomButton
        width={windowWidth * 0.5}
        height={windowHeight * 0.055}
        shadowprop={true}
        text={'PLAY'}
        isBold
        style={{
          fontFamily: 'Sugar-Bomb',
          position: 'absolute',
          bottom: moderateScale(55, 0.4),
        }}
        marginTop={moderateScale(8, 0.2)}
        // textTransform={"capitalize"}
        textColor={'white'}
        borderRadius={moderateScale(25, 0.2)}
        isGradient
        gradientColor={['#8BCCFD', '#1E9DEF']}
      />
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
