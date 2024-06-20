import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomButton from '../Components/CustomButton';
import Color from '../Assets/Utilities/Color';
import ImagePickerModal from '../Components/ImagePickerModal';
import CustomImage from '../Components/CustomImage';
import {Icon} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomText from '../Components/CustomText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validateEmail} from '../Config';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useDispatch} from 'react-redux';
import {setUserData, setUserWallet} from '../Store/slices/common';
import {setUserLogin, setUserToken} from '../Store/slices/auth';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import navigationService from '../navigationService';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import SelectLocationModal from '../Components/SelectLocationModal';
import Entypo from 'react-native-vector-icons/Entypo'
import { AirbnbRating } from 'react-native-ratings';
import { position } from 'native-base/lib/typescript/theme/styled-system';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  // const [designation, setDesignation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  console.log('PASSWORD', confirmPassword);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState({});
  const [userRole, setUserRole] = useState('Barber');
  console.log('🚀 ~ file: Signup.js:46 ~ Signup ~ userRole', userRole);
  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({});
  console.log('🚀 ~ Signup ~ address:', address);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [selectLocationModal, setselectLocationModal] = useState(false);
  console.log('🚀 ~ Signup ~ selectLocationModal:', selectLocationModal);

  
  return (
    <>
      <CustomStatusBar barStyle={'light-content'} />
      {/* <Header /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{
        //   height:windowHeight,
        // }}
        contentContainerStyle={{
          alignItems: 'center',
          // backgroundColor  : 'red'
        }}>
         <ImageBackground
        style={styles.container}
        resizeMode={'stretch'}
        source={require('../Assets/Images/bg.png')
          }>
          <View>
            {Object.keys(image).length > 0 ? (
              <CustomImage source={{uri: image?.uri}} style={styles.image} />
            ) : (
              <CustomImage
                style={styles.image}
                source={require('../Assets/Images/animated.png')}
              />
            )}
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}
              style={styles.edit}>
              <Icon
                name="pencil-alt"
                as={FontAwesome5}
                // style={styles.icon2}
                color={Color.white}
                size={moderateScale(16, 0.3)}
              />
            </TouchableOpacity>
          </View>

          <CustomText isBold style={styles.heading}>
            Sign up
          </CustomText>
  
          <TextInputWithTitle
            titleText={'Full Name'}
            placeholder={'please enter your Full Name'}
            setText={setFullName}
            value={fullName}
            viewHeight={0.057}
            viewWidth={0.78}
            inputWidth={0.6}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(20, 0.3)}
            color={Color.themeColor}
            placeholderColor={"#B5B7CA"}
            borderRadius={moderateScale(40, 0.4)}
          />

          <TextInputWithTitle
            titleText={'Email or phone number'}
            placeholder={'please enter your Email or phone number'}
            setText={setEmail}
            value={email}
            viewHeight={0.057}
            viewWidth={0.78}
            inputWidth={0.6}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(12, 0.3)}
            color={Color.themeColor}
            placeholderColor={"#B5B7CA"}
            borderRadius={moderateScale(40, 0.2)}
          />
          <TextInputWithTitle
            titleText={'user Name'}
            placeholder={'please enter your user Name'}
            setText={setUserName}
            value={userName}
            viewHeight={0.057}
            viewWidth={0.78}
            inputWidth={0.6}
            backgroundColor={'#FFFFFF'}
            marginTop={moderateScale(12, 0.3)}
            color={Color.themeColor}
            placeholderColor={"#B5B7CA"}
            borderRadius={moderateScale(40, 0.4)}
          /><View
            style={{
              zIndex: 1,
            }}>
            <TextInputWithTitle
              secureText
              titleText={'Password'}
              placeholder={'please enter 6-8 character Password'}
              setText={setPassword}
              value={password}
              viewHeight={0.057}
              viewWidth={0.78}
              inputWidth={0.6}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(12, 0.3)}
              color={Color.themeColor}
              placeholderColor={"#B5B7CA"}
              borderRadius={moderateScale(40, 0.4)}
            />
            {/* <TextInputWithTitle
              secureText
              titleText={'Confirm Password'}
              placeholder={'Confirm Password'}
              setText={setConfirmPassword}
              value={confirmPassword}
              viewHeight={0.06}
              viewWidth={0.75}
              inputWidth={0.6}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(12, 0.3)}
              color={Color.themeColor}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(30, 0.4)}
            /> */}
            <CustomText style={styles.already}>
              already have an account ?sign in
            </CustomText>
            <View style={styles.row}>
              <TouchableOpacity style={styles.clickeable}>
                {/* <Icon style={{
                  textAlign :'center'
                }} name={'check'}  size={18} as={Entypo} color={'white'}/> */}
              </TouchableOpacity>
              <CustomText
                style={styles.accepted}>
                by creating account with us ,you certify you have read and
                accepted the privacy and term and condition .
              </CustomText>
            </View>
          </View>
         
          <CustomButton
            onPress={() => {
              navigation.navigate('Homescreen');
            }}
            iconName={'key'}
            iconType={FontAwesome6}
            // bgColor={'lightblue'}
            // borderColor={'#0000004D'}
            // borderWidth={0}
            iconContainerStyle={{
              height :windowHeight*0.06,
              width :windowHeight*0.06,
              borderRadius :windowHeight*0.06/2,
              backgroundColor :'white',
              alignItems:'center',
              justifyContent:'center',
              position:'absolute', 
              left:7,
              // borderWidth:1,
            }}
            iconStyle={{
              color:'#219FF0',
              fontSize:moderateScale(16,0.2),
              textAlign:'center',
              // height:moderateScale(23,0.2),
              // transform: [{ rotate: '180deg'}]
            }}
            shadowProp
            textColor={Color.white}
            width={windowWidth * 0.45}
            height={windowHeight * 0.07}
            borderRadius={moderateScale(25, 0.6)}
            text={'Sign Up'}
            shadowColor={"#93D0FF"}
            isGradient
            fontSize={moderateScale(18, 0.3)}
            isBold
            gradientColor={['#8BCCFD', '#1B9CEF']}
            marginTop={moderateScale(20, 0.3)}
          />
       
          </ImageBackground>
        {/* </LinearGradient> */}

        <ImagePickerModal
          show={showModal}
          setShow={setShowModal}
          setFileObject={setImage}
        />
      </ScrollView>
      {/* <SelectLocationModal
        isVisible={selectLocationModal}
        setIsVisibleModal={setselectLocationModal}
        setLocation={setAddress}
      /> */}
      {/* // </ScreenBoiler> */}
    </>
  );
};

export default Signup;

const styles = ScaledSheet.create({
  container: {
    minHeight: windowHeight,
    width: windowWidth,
    alignItems: 'center',
    paddingTop :moderateScale(70,.6),
    paddingBottom: moderateScale(50, 0.3),
  },
  already: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
    textAlign: 'center',
    paddingVertical: moderateScale(10, 0.6),
  },
  userTypeContainer: {
    width: windowWidth * 0.7,
    padding: moderateScale(10, 0.3),
    marginTop: moderateScale(10, 0.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  accepted :{
    fontSize: moderateScale(10, 0.6),
    color: Color.white,
    width: windowWidth * 0.7,
  },

  edit: {
    backgroundColor: '#44A2C5',
    width: moderateScale(25, 0.3),
    height: moderateScale(25, 0.3),
    position: 'absolute',
    bottom: moderateScale(5, 0.3),
    right: moderateScale(1, 0.3),
    borderRadius: moderateScale(12.5, 0.3),
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(100, 0.3),
    height: moderateScale(100, 0.3),
    borderRadius: moderateScale(49, 0.3),
    marginLeft: moderateScale(2.5, 0.3),
    marginTop: moderateScale(2.5, 0.3),
    borderColor:'white',
    borderWidth:moderateScale(3,0.2)
  },
  row:{flexDirection: 'row',
  alignItems :'center'
},
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.9,
  },
  txt4: {
    color: Color.themeColor,
    fontSize: moderateScale(14, 0.6),
    borderBottomWidth: 1,
    borderColor: Color.themeColor,
    marginBottom: moderateScale(5, 0.3),
  },
  txt5: {
    color: Color.themeLightGray,

    fontSize: moderateScale(12, 0.6),
  },
  circle: {
    height: moderateScale(13, 0.3),
    width: moderateScale(13, 0.3),
    borderRadius: moderateScale(6.5, 0.3),
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.themeColor,
    marginLeft: moderateScale(15, 0.3),
  },
  txt2: {
    fontSize: moderateScale(12, 0.3),
    color: Color.themeColor,
  },
  heading: {
    fontSize: moderateScale(20, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(10, 0.6),
  },
  clickeable: {
    height: windowHeight * 0.02,
    borderRadius: moderateScale(3, 0.6),
    width: windowWidth * 0.05,
    borderWidth: moderateScale(1, 0.6),
    borderColor: Color.white,
    marginHorizontal: moderateScale(10, 0.3),
  },
});













          {/* <TouchableOpacity
            onPress={() => {
              setselectLocationModal(true);
            }}>
            <TextInputWithTitle
              iconName={'map-pin'}
              iconType={Feather}
              // disable
              titleText={'address'}
              secureText={false}
              placeholder={'Address'}
              setText={setAddress}
              value={address?.name}
              viewHeight={0.06}
              viewWidth={0.75}
              inputWidth={0.6}
              // border={1}
              // borderColor={'#1B5CFB45'}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(12, 0.3)}
              color={Color.themeColor}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(30, 0.4)}
              disable
            />
          </TouchableOpacity> */}
          