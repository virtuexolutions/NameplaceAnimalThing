import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import CustomButton from '../Components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

const SplashScreen = () => {
  const backgroundImage = require('../Assets/Images/Logo2.gif');
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.black}
      statusBarContentStyle={'light-content'}>
      {/* <ImageBackground
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
    </ImageBackground> */}
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={Color.themeGradient}
        style={styles.container}>
        <FastImage
          source={backgroundImage}
          style={{width: windowWidth * 0.8, height: windowHeight * 0.3}}
          resizeMode={FastImage.resizeMode.contain}
          animated
        />

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}>
          <CustomImage
            source={require('../Assets/Images/backgroundLogo.png')}
            resizeMode={'stretch'}
            style={
              {
                //   flexGrow : 0 ,
                //   position : 'absolute',
                //   bottom : moderateScale(0,0.3) ,
                //   right : 1,
                //   zIndex : 1,
                // left : 0,
                //   top : moderateScale(50,0.3),
                // backgroundColor : 'red'
              }
            }
          />
        </View>
      </LinearGradient>
    </ScreenBoiler>
  );
};

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
    width: windowWidth,
    // backgroundColor : Color.green
  },
  bottomImage: {
    width: windowWidth * 0.65,
    alignSelf: 'center',
    // backgroundColor : 'red'
  },
  textContainer: {
    flexDirection: 'row',

    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    borderRadius: moderateScale((windowWidth * 0.7) / 2, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  LogoText: {
    fontSize: moderateScale(35, 0.3),
    fontWeight: 'bold',
  },
});

export default SplashScreen;
