import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  I18nManager,
  ActivityIndicator,
} from "react-native";
import { Icon } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { moderateScale } from "react-native-size-matters";
import CustomText from "./CustomText";
import Color from "../Assets/Utilities/Color";
import CustomImage from "./CustomImage";
import { windowHeight, windowWidth } from "../Utillity/utils";

const CustomButton = (props) => {
  const {
    activeOpacity,
    onPress,
    width,
    height,
    bgColor,
    borderWidth,
    borderColor,
    marginTop,
    marginBottom,
    margin,
    justifyContent,
    borderRadius,
    isGradient,
    fontSize,
    loader,
    loaderColor,
    iconName,
    iconType,
    iconStyle,
    textColor,
    textTransform,
    text,
    isBold,
    disabled = false,
    alignSelf,
    image,
    shadowprop,
    shadowColor,
    style,
    iconContainerStyle,
    gradientColor

    // value
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ? activeOpacity : 0.9}
      onPress={onPress}
      style={[
        style && style,
        styles.mainBtn,
        {
          margin:margin,
          width: width,
          height: height,
          backgroundColor: bgColor,
          borderColor: borderColor,
          marginTop: marginTop || 0,
          marginBottom: marginBottom || 0,
        },
        alignSelf && {
          alignSelf: alignSelf,
        },
        justifyContent && {
          justifyContent: justifyContent,
        },
        borderRadius && {
          borderRadius: borderRadius,
          overflow: 'hidden'
        },
        borderWidth && {
          borderWidth: borderWidth,
        },
        disabled && {
          backgroundColor: Color.themeLightGray,
          borderColor: Color.themeLightGray,
          color: Color.white,
        },
        shadowprop && {
          shadowColor: shadowColor ? shadowColor : 'grey',
          shadowOffset: {width: 3, height: 3},
          shadowOpacity: 0.5,
          elevation: 15,
        },
      ]}
      disabled={disabled}
    >
      {disabled == false && isGradient ? (
        <LinearGradient
          style={[{
            flexDirection: "row",
            width: width,
            height: height,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: borderRadius,
          },
          iconName && {
            paddingLeft:moderateScale(20,0.2),
            // gap:moderateScale(16,0.2)
          },
          shadowprop && {
            shadowColor: shadowColor ? shadowColor : 'grey',
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 0.5,
            elevation: 5,
          },
        ]}
          start={{ x: 0.2, y: 0.6}}
          end={{ x: 1, y: 0 }}
          colors={props?.gradientColor ? props?.gradientColor :  Color.btnColor}
        >
          {loader && (
            <ActivityIndicator
              style={styles.indicatorStyle}
              size="small"
              color={loaderColor ? loaderColor : Color.white}
            />
          )}
          {iconName && (
            <View style={iconContainerStyle}>

            <Icon
              name={iconName}
              as={iconType}
              style={[!iconContainerStyle && styles.iconCustom, iconStyle && iconStyle]} 
              />
              </View>
          
          )}
          {
            image &&
            <View 
            style={{
              width: windowWidth * 0.1,
             height:windowWidth * 0.1,
            //  paddingVertical:moderateScale(17, 0.8)
            }}
            >

            <CustomImage source={image} 
            resizeMode={'cover'}
            style={{width:"100%",
            height:"100%",
            overflow:"hidden"
          
          }}
            />
            </View>
          }
          <CustomText
            style={[
              styles.text,
              {
                color: textColor,
                fontSize: fontSize ? fontSize : moderateScale(15, 0.3),
              },
              
              textTransform && {
                textTransform: textTransform,
              },
            ]}
            isRegular={isBold ? false : true}
            isBold={isBold ? true : false}
          >
            {text}
          </CustomText>
        </LinearGradient>
      ) : (
        <>
          {loader && (
            <ActivityIndicator
              style={styles.indicatorStyle}
              size="small"
              color={loaderColor ? loaderColor : Color.white}
            />
          )}
          {iconName && (
            <Icon
              name={iconName}
              as={iconType}
              style={[styles.iconCustom, iconStyle && !iconContainerStyle && iconStyle]}
            />
          )}
          <CustomText
            style={[
              styles.text,
              {
                color: textColor,
                fontSize: fontSize ? fontSize : moderateScale(15, 0.3),
              },
              textTransform && {
                textTransform: textTransform,
              },
              disabled && {
                color: Color.white,
                opacity: 0.6,
              },
            ]}
            isRegular={isBold ? false : true}
            isBold={isBold ? true : false}
          >
            {text}
          </CustomText>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainBtn: {
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex : 1,
  },
  text: {
    color: "white",
          textTransform: "uppercase",

    // textTransform: "capitalize",
    // fontFamily:'Sugar Bomb',
    textAlign: "center",
  },
  indicatorStyle: {
    paddingRight: 5,
    paddingLeft: I18nManager.isRTL ? 5 : 0,
  },
  iconCustom: {
    height :windowHeight*0.05,
    width :windowHeight*0.05,
    borderRadius :windowHeight*0.05/2,
    // backgroundColor :'white',
    textAlign :'center',
    paddingTop :17,
    position :'absolute',
    left :10,
    alignItems :'center',
    color:Color.black,
    fontSize: 25,
    // paddingRight: 20,
    paddingLeft: I18nManager.isRTL ? 20 : 0,
  },
  shadowprop: {

    shadowColor: 'grey',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    elevation: 5,
  },
});

export default CustomButton;
