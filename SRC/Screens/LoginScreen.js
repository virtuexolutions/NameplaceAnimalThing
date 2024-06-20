import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import navigationService from '../navigationService';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {setUserToken} from '../Store/slices/auth';
import {useDispatch, useSelector} from 'react-redux';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {Platform} from 'react-native';
import {ToastAndroid} from 'react-native';
import {Alert, Icon} from 'native-base';
import {ActivityIndicator} from 'react-native';
import {setUserData, setUserWallet} from '../Store/slices/common';
import {useNavigation} from '@react-navigation/native';
import {color} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { position } from 'native-base/lib/typescript/theme/styled-system';

const LoginScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginMethod ,setLoginMethod] =useState('')
 

const loginWithGoogle = async (response1) => {
console.log( ' in the ' )
    const url = 'v1/user/social-login';
    // https://3c30-103-125-71-59.ngrok-free.app/api/v1/user/social-login
      //  https://3c30-103-125-71-59.ngrok-free.app/api/v1/user/social-login
    const body = {...response1 , loginMethod: 'Google',}
 

   
 console.log("🚀 ~ login ~ body:", body)

    setLoading(true);
    const response = await Post(url, body, apiHeader(token));
    setLoading(false);
    if (response != undefined) {
   console.log("🚀 ~ file: LoginScreen.js:46 ~ login ~ response:", response?.data)

      dispatch(setUserToken({token: response?.data?.token}));
      dispatch(setUserData(response?.data?.user_info));
      dispatch(setUserWallet(response?.data?.user_info?.wallet));

    }
  };

  const backgroundImage = require('../Assets/Images/appLogo.png');
  return (
    <ScreenBoiler
      statusBarBackgroundColor={Color.black}
      statusBarContentStyle={'light-content'}>
      <ImageBackground
        style={styles.container}
        resizeMode={'stretch'}
        source={require('../Assets/Images/bg.png')}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          style={{
            width: windowWidth,
            zIndex: 1,
          }}>
          <View style={styles.imageContainer}>
            <CustomImage
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../Assets/Images/animated.png')}
            />
          </View>
          <CustomText isBold style={styles.text1}>
            welcome back
          </CustomText>
          <CustomText style={styles.des}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            congue nunc. Praesent cursus dolor auctor .
          </CustomText>
          <TextInputWithTitle
            // titleText={'Your Email'}
            placeholder={'Enter Your Email'}
            setText={setEmail}
            value={email}
            viewHeight={0.057}
            viewWidth={0.8}
            inputWidth={0.74}
            // border={1}
            // borderColor={'#1B5CFB45'}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(10, 0.3)}
            marginBottom={moderateScale(15, 0.3)}
            color={Color.themeColor}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(30, 0.4)}
          />
          <TextInputWithTitle
            secureText
            // titleText={'Your Password'}
            placeholder={'Enter Your Password'}
            setText={setPassword}
            value={password}
            viewHeight={0.057}
            viewWidth={0.78}
            inputWidth={0.74}
            iconName={''}
            // border={1}
            // borderColor={'#1B5CFB45'}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(20, 0.3)}
            color={Color.themeColor}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(30, 0.4)}
          />
          <CustomText style={styles.forgotText}>forgot password ?</CustomText>
          <CustomButton
            onPress={() => {
              // login()
              // navigation.navigate('Homescreen');
            }}
            iconName={'user'}
            iconType={AntDesign}
            iconStyle={{
              color: '#1B9CEF',
            }}
            iconContainerStyle={{
              height: windowHeight * 0.05,
              width: windowHeight * 0.05,
              borderRadius: (windowHeight * 0.05) / 2,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: 7,
            }}
            textColor={Color.white}
            width={windowWidth * 0.5}
            height={windowHeight * 0.06}
            borderRadius={moderateScale(25, 0.6)}
            text={'log In'}
            isGradient
            fontSize={moderateScale(18, 0.3)}
            isBold
            gradientColor={['#8BCCFD', '#1B9CEF']}
            marginBottom={moderateScale(10, 0.3)}
          />
          <View style={styles.row}>
            <View style={styles.viewContainer}></View>
            <CustomText
            isBold
              style={{
                color: Color.lightGray,
                fontSize :moderateScale(13,.6),
                textTransform:'uppercase',
                paddingHorizontal:moderateScale(10,.6)
              }}>
              OR
            </CustomText>
            <View style={styles.viewContainer}></View>
          </View>

         

          <CustomButton
            onPress={() => {

              setLoginMethod('Google')
              GoogleSignin.configure({
                androidClientId:
                  '545629339802-p6997cdtm8fke029epg5hg1v8mipgci6.apps.googleusercontent.com',
                // iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
              });
              GoogleSignin.hasPlayServices()
                .then(hasPlayService => {
                  if (hasPlayService) {
                    GoogleSignin.signIn()
                      .then(userInfo => {
                        console.log('helllllllllllooooooooooooooooo',JSON.stringify(userInfo));
                        loginWithGoogle(userInfo)
                      })
                      .catch(e => {
                        console.log('ERROR IS: ' + JSON.stringify(e));
                      });
                  }
                })
                .catch(e => {
                  console.log('ERROR IS: ' + JSON.stringify(e,null,2));
                });
            }}
            iconName={'google'}
            iconType={AntDesign}
            color={'#1B9CEF'}
            iconStyle={{
              color: 'white',
            }}
            iconCustom={{
              width: windowWidth * 0.05,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: 29,
            }}
            textColor={Color.white}
            width={windowWidth * 0.55}
            height={windowHeight * 0.04}
            text={'Sign in with Google'}
            borderWidth={1}
            borderColor={Color.lightGrey}
            bgColor={'transparent'}
            fontSize={moderateScale(10, 0.3)}
            isBold
            marginTop={moderateScale(13,.3)}
            marginBottom={moderateScale(90,.3)}
          />
       
           <CustomText
            isBold
            style={{
              zIndex: 1,
              color: 'white',

              // backgroundColor :'red',

              letterSpacing: 2,
              fontSize: moderateScale(12, 0.3),
              // marginTop: moderateScale(5, 0.3),
            }}>
            no have account?{' '}
            <CustomText
              onPress={() => {
                console.log('fdfds');
                navigationService.navigate('Signup');
              }}
              isBold
              style={{
                color: 'white',
                letterSpacing: 2,
                fontSize: moderateScale(12, 0.3),
              }}>
              Sign Up
            </CustomText>
          </CustomText>
          {/* </View> */}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}>
          <CustomImage
            source={require('../Assets/Images/backgroundLogo.png')}
            style={{}}
          />
        </View>
      </ImageBackground>
      {/* </LinearGradient> */}
    </ScreenBoiler>
  );
};

export default LoginScreen;

const styles = ScaledSheet.create({
  container: {
    paddingTop: windowHeight * 0.13,
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },
  bottomImage: {
    width: windowWidth * 0.4,
    alignSelf: 'center',
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
  text: {
    textTransform: 'uppercase',
    color: Color.white,
    fontSize: moderateScale(16, 0.3),
  },
  text1: {
    // fontFamily:'Sugar Bomb',
    textTransform: 'uppercase',
    color: Color.white,
    fontSize: moderateScale(32, 0.3),
  },
  forgotText: {
    color: Color.white,
    textAlign: 'left',
    width: windowWidth * 0.76,
    paddingVertical: moderateScale(10, 0.3),
    fontSize: moderateScale(13, 0.6),
  },
  shadowprop: {
    shadowColor: 'white',
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.1,
    elevation: 9,
  },
  des: {
    fontSize: moderateScale(10, 0.6),
    color: 'white',
    width: windowWidth * 0.8,
    paddingVertical: moderateScale(10, 0.6),
    paddingBottom: moderateScale(20, 0.6),
  },
  imageContainer: {
    // backgroundColor: 'red',
    height: windowHeight * 0.18,
    width: windowHeight * 0.18,
    borderRadius: (windowHeight * 0.18) / 2,
    borderWidth: moderateScale(3, 0.6),
    borderColor: 'white',
    overflow: 'hidden',
  },
  viewContainer: {
    width: windowWidth * 0.3,
    borderBottomWidth: 1,
    borderColor: Color.lightGray,
    marginBottom :moderateScale(8,.3)

  },
  row: {
    // backgroundColor: 'red',
    width: windowWidth * 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginHorizontal :moderateScale(25,.6)

  },
});

{
  /* <TouchableOpacity
  style={[styles. shadowprop ,{
    backgroundColor: 'lightblue',
    width: windowWidth * 0.55,
    height: windowHeight * 0.055,
    borderRadius: moderateScale(20, 0.6),
    flexDirection :'row',
    alignItems:'center'
    // justifyContent :'center'
  }]}>
  <Icon
    style={{
      backgroundColor: 'white',
      width: windowHeight * 0.05,
      height: windowHeight * 0.05,
      borderRadius: (windowHeight * 0.05) / 2,
      textAlign: 'center',
      position :'absolute',
      left :10,
      paddingTop :moderateScale(10,.6)
    }}
    name="user"
    size={moderateScale(20, 0.6)}
    as={AntDesign}
  />
  <CustomText style={{
    fontSize :moderateScale(18,.6),
    width :windowWidth *0.6,
    // backgroundColor :'red',
    textAlign :'center',
    paddingHorizontal:moderateScale(10,.6),
  }}>Login in </CustomText>
</TouchableOpacity> */
}
{
  /* <View style={{
  // width :windowWidth * 0.55,
  // height :windowHeight * 0.066,
  backgroundColor :'white',
  borderRadius :moderateScale(30,.6),
  paddingHorizontal :moderateScale(3,.6),
  paddingVertical :moderateScale(3,.6)
  
}}> */
}
