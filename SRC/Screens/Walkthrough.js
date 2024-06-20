import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Icon} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import Color from '../Assets/Utilities/Color';
import {useSelector, useDispatch} from 'react-redux';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import {setWalkThrough} from '../Store/slices/auth';
import LinearGradient from 'react-native-linear-gradient';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {RadialGradient} from 'react-native-svg';
import CustomButton from '../Components/CustomButton';

const WalkThroughScreen = () => {
  const slides = [
    {
      key: 1,
      text: `Name The Creative Game In Chanllenging New Game Modes!`,
      background: require('../Assets/Images/nameBg.png'),
      image: require('../Assets/Images/nameLogo.png'),
    },
    {
      key: 2,
      text: 'Save The Creative Game In Chanllenging New Game Modes!',
      background: require('../Assets/Images/placeBg.png'),
      image: require('../Assets/Images/placeLogo.png'),
    },
    {
      key: 3,
      text: 'Save The Creative Game In Chanllenging New Game Modes!',
      background: require('../Assets/Images/nameBg.png'),
      image: require('../Assets/Images/AnimalLogo.png'),
    },
  ];

  const RenderSlider = ({item, index}) => {
    return (
      // <View style={styles.SliderContainer}>
      //   <ImageBackground
      //     style={{
      //       width: windowWidth,
      //       minHeight: windowHeight,
      //       paddingBottom: moderateScale(40, 0.6),
      //       justifyContent: 'center', alignItems: 'center',
      //     }}
      //     source={require('../Assets/Images/NameBg.png')}>
      //     <View
      //       style={[
      //         {
      //           width: windowWidth * 0.9,
      //           height:
      //             item.key == '2' ? windowHeight * 0.4 : windowHeight * 0.8,
      //           borderRadius: moderateScale(20, 0.6),
      //           alignItems: 'center',
      //           position: 'absolute',
      //           bottom: 0,
      //         },
      //         item.key == '3' ? {height: windowHeight * 0.35} : null,
      //       ]}>
      //       <LinearGradient
      //         style={{marginTop: item.key === '2' ? moderateScale(15, 0.3) : 0}}
      //         colors={['#FFFFFF00', Color.white]}
      //         start={item.key !== '3' ? {x: 1.5, y: 1} : {x: 0, y: 0.9}}
      //         end={item.key !== '3' ? {x: 0.15, y: 1.5} : {x: 1, y: 0.4}}>
      //         <CustomText
      //           style={{
      //             // backgroundColor:Color.white,
      //             color: '#001D56',
      //             fontSize: moderateScale(30, 0.6),
      //             width: windowWidth,
      //             paddingHorizontal: moderateScale(25, 0.6),
      //             textAlign: item.key == '3' ? 'right' : 'left',
      //             paddingVertical: moderateScale(5, 0.6),
      //           }}
      //           numberOfLines={2}
      //           isBold>
      //           {item?.title}
      //         </CustomText>
      //       </LinearGradient>
      //       <CustomText
      //         style={{
      //           color: Color.black,
      //           fontSize: moderateScale(11, 0.6),
      //           width: windowWidth * 0.9,
      //           lineHeight: moderateScale(15, 0.3),
      //           textAlign: item.key == '3' ? 'right' : 'left',
      //           paddingVertical: moderateScale(5, 0.6),
      //         }}
      //         numberOfLines={15}>
      //           gfhgdfhghdghgsdgjghjghj
      //         {item?.text}
      //       </CustomText>
      //     </View>
      //   </ImageBackground>
      // </View>

      <ImageBackground
        source={item.background}
        style={{
          width: windowWidth,
          height: windowHeight,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomImage source={item.image} />
        <CustomText
          style={{
            width: windowWidth * 0.8,
            fontSize: moderateScale(24, 0.2),
            color: 'white',
            textAlign: 'center',
          }}>
          {item.text}
        </CustomText>
        {/* <RenderNextBtn/> */}
        {/*
         <CustomButton
          width={windowWidth * 0.45}
          height={windowHeight * 0.05}
          shadowprop={true}
          text={"Next"}
          isBold
          // style={{fontFamily: 'Sugar-Bomb',}}
          marginTop={moderateScale(8,0.2)}
          // textTransform={"capitalize"}
          shadowColor={"#93D0FF"}
          textColor={"white"}
          borderRadius={moderateScale(25,0.2)}
          isGradient
          gradientColor={["#8BCCFD", "#1E9DEF"]}
          bgColor
          /> 
          */}
      </ImageBackground>
    );
  };

  const RenderNextBtn = () => {
    return (
      <LinearGradient
        colors={['#8BCCFD', '#1E9DEF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.nextButton}>
        <CustomText
          isBold
          style={{color: Color.white, fontSize: moderateScale(25, 0.2)}}>
          NEXT
        </CustomText>
      </LinearGradient>
      // <CustomButton
      //   width={windowWidth * 0.45}
      //   height={windowHeight * 0.05}
      //   shadowprop={true}
      //   text={"Next"}
      //   isBold
      //   style={{position:'absolute',
      //   top:moderateScale(-50,0.2),
      //   left:moderateScale(-260,0.3)}}
      //   // marginTop={moderateScale(8,0.2)}
      //   // textTransform={"capitalize"}
      //   shadowColor={"#93D0FF"}
      //   textColor={"white"}
      //   borderRadius={moderateScale(25,0.2)}
      //   isGradient
      //   gradientColor={["#8BCCFD", "#1E9DEF"]}
      //   bgColor
      //   />
    );
  };
  const RenderDoneBtn = () => {
    return (
      
      <LinearGradient
        colors={['#8BCCFD', '#1E9DEF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.nextButton}>
        <CustomText
          isBold
          style={{color: Color.white, fontSize: moderateScale(25, 0.2)}}>
          Next
        </CustomText>
      </LinearGradient>
    );
  };
  const RenderSkipBtn = () => {
    return (
      <View style={[styles.doneBtn, styles.skip]}>
        <CustomText
          // onPress={() => {
          //   // dispatch(setWalkThrough(true));
          // }}
          isBold
          style={{
            color: Color.white,
            overflow: 'hidden',
            fontSize: moderateScale(12, 0.9),
          }}>
          Skip
        </CustomText>
      </View>
    );
  };
  const RenderBackBtn = () => {
    return (
      <View style={[styles.generalBtn, styles.btnLeft]}>
        <Icon
          name="arrowleft"
          size={moderateScale(24, 0.6)}
          color={Color.white}
          as={AntDesign}
        />
      </View>
    );
  };
  return (
    <ScreenBoiler
      showHeader={false}
      // statusBarBackgroundColor={[Color.white, Color.white]}
      statusBarContentStyle={'dark-content'}>
      <View style={styles.container}>
        <AppIntroSlider
          data={slides}
          renderItem={RenderSlider}
          showSkipButton={true}
          showsHorizontalScrollIndicator
          // showPrevButton={true}
          showDoneButton={true}
          dotStyle={{
            backgroundColor: 'transparent', // Customize dot color
            width: moderateScale(12, 0.2),
            height: moderateScale(4, 0.2),
            borderRadius: 4,
            borderColor: '#2B83B3',
            borderWidth: moderateScale(1, 0.2),
            //         position: 'absolute',
            // top: moderateScale(-620,0.2),
            // left: moderateScale(20,0.2),
            // position: 'absolute',
            // top: moderateScale(-600,0.7),
            // left: 20,

            // backgroundColor:'red'
          }}
          activeDotStyle={{
            width: moderateScale(12, 0.2),
            height: moderateScale(4, 0.2),
            borderRadius: 4,
            borderColor: 'white',
            borderWidth: moderateScale(1, 0.2),
            backgroundColor: 'white',
            // position: 'absolute',
            // top: moderateScale(-620,0.2), // Adjust top position
            // left: moderateScale(90,0.2),
          }}
          renderNextButton={RenderNextBtn}
          // renderPrevButton={RenderBackBtn}
          renderPrevButton={null}
          renderDoneButton={RenderDoneBtn}
          renderSkipButton={RenderSkipBtn}
        />
      </View>
    </ScreenBoiler>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Color.red,
    width: windowWidth,
    height: windowHeight,
  },
  // bgImage: {
  //   flex: 1,
  // },
  SliderContainer: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Color.white,
  },
  title: {
    color: Color.themeColor2,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    width: windowWidth * 0.8,
    marginTop: windowHeight * 0.065,
  },
  subcontainer: {
    width: windowWidth,
    height: windowHeight * 0.55,
    backgroundColor: Color.green,
    borderTopLeftRadius: moderateScale(35, 0.3),
    borderTopRightRadius: moderateScale(35, 0.3),
  },
  subText: {
    color: Color.themeColor2,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: moderateScale(15, 0.3),
    width: windowWidth * 0.8,
    marginTop: moderateScale(10, 0.3),
  },
  generalBtn: {
    backgroundColor: '#001D56',
    borderColor: Color.white,
    // opacity:0.34,
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    borderWidth: moderateScale(1.5, 0.7),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(100, 0.9),
    // paddingVertical: moderateScale(15, 0.5),
    textAlign: 'center',
    fontWeight: '400',
    // fontSize: moderateScale(15, 0.3),
  },
  doneBtn: {
    width: windowWidth * 0.14,
    height: windowHeight * 0.07,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center',
    // marginTop: moderateScale(18, 0.3),
    // borderRadius: moderateScale(100, 0.9),
    // borderColor: Color.white,
    // backgroundColor: '#001D56',
    // opacity: 0.5,
    // borderWidth: moderateScale(1.5, 0.7),

    // borderWidth:  moderateScale(3,0.1),
  },
  btnLeft: {
    backgroundColor: '#001D56',
    position: 'absolute',
    paddingHorizontal: moderateScale(7, 0.2),
    paddingVertical: moderateScale(7, 0.2),
    top: moderateScale(-600, 0.7),
    // right: moderateScale(20,0.1),
    zIndex: 1,
  },
  skip: {
    top: moderateScale(-610, 0.7),
    right: moderateScale(-290, 0.3),
    // width:windowWidth * 0.18,
    // height: windowHeight * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: moderateScale(100, 0.9),
    // borderColor:Color.white,
    // backgroundColor: '#001D56',
    // opacity: 0.5,
    // borderWidth:  moderateScale(3,0.1),
    zIndex: 1,
  },
  btnRight: {
    backgroundColor: '#001D56',
    paddingHorizontal: moderateScale(8, 0.4),
    paddingVertical: moderateScale(8, 0.4),
    position: 'absolute',
    // opacity:0.34,
    top: moderateScale(-600, 0.7),
    right: moderateScale(11, 0.1),
    zIndex: 1,
  },
  nextButton: {
    position: 'absolute',
    top: moderateScale(-50, 0.2),
    left: moderateScale(-260, 0.3),
    width: windowWidth * 0.48,
    height: windowHeight * 0.06,
    //  backgroundColor:Color.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(25, 0.2),
    shadowColor: '#93D0FF',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.5,
    elevation: 5,
  },
});

export default WalkThroughScreen;
