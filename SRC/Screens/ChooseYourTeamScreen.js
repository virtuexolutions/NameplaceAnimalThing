import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import ScreenBoiler from '../Components/ScreenBoiler'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomImage from '../Components/CustomImage'
import { moderateScale } from 'react-native-size-matters'
import CustomButton from '../Components/CustomButton'
import CustomText from '../Components/CustomText'
import LinearGradient from 'react-native-linear-gradient'

const ChooseYourTeamScreen = () => {
  return (
    <ScreenBoiler
    statusBarBackgroundColor={Color.black}
    statusBarContentStyle={'light-content'}>
    <ImageBackground
      style={styles.container}
      resizeMode={'stretch'}
      source={require('../Assets/Images/hbg.png')}>
        <View
        style={{zIndex:1}}
        >
            <CustomImage
            source={require('../Assets/Images/elephant.png')}
            />
        </View>
        <LinearGradient
        style={{
            position:'absolute',
            bottom:100,
            left:60,
            zIndex:0,
            paddingVertical:moderateScale(12,0.2),
            width:windowWidth * 0.75, height:windowHeight * 0.26, 
            borderColor:'white',
            alignItems:'center',
            justifyContent:'center',
            gap:moderateScale(10,0.1),
            borderRadius:moderateScale(18,0.2), borderWidth: moderateScale(1) }}
            start={{ x: 0, y: 0}}
            end={{ x: 0.6, y: 1 }}
            colors={['#d2eff7', "#a8e6f7"]}
        >
            <CustomButton
            width={windowWidth * 0.45}
            height={windowHeight * 0.07}
            shadowprop={true}
            text={"Single"}
            isBold
            style={{fontFamily: 'Sugar-Bomb',}}
            marginTop={moderateScale(8,0.2)}
            // textTransform={"capitalize"}
            textColor={"white"}
            borderRadius={moderateScale(25,0.2)}
            isGradient
            gradientColor={["#8BCCFD", "#1E9DEF"]}
            bgColor
            />
            <CustomButton
            width={windowWidth * 0.45}
            height={windowHeight * 0.07}
            // shadowprop={true}
            text={"Team"}
            isBold
            // textTransform={"capitalize"}
            textColor={"#209EF0"}
            borderWidth={moderateScale(1,0.2)}
            borderRadius={moderateScale(25,0.2)}
            borderColor={"#1F9EEF"}
            />
        </LinearGradient>

        <CustomText 
        style={styles.text}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis est quis. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </CustomText>

        </ImageBackground>
        </ScreenBoiler>
  )
}

export default ChooseYourTeamScreen;

const styles= StyleSheet.create({
    container: {
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        justifyContent:'space-between',
        zIndex:-1
      },
      text:{
        width:windowWidth  ,
        paddingHorizontal:moderateScale(10,0.2),
        color:"white",
        fontSize:moderateScale(10,0.2),
        marginBottom:moderateScale(12,0.2)
      }
})