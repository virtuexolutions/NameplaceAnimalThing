 import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../Components/CustomButton';
import moment from 'moment/moment';
import CustomTextWithMask from '../Components/CustomTextWithMask';
import {Icon} from 'native-base';
import numeral from 'numeral';
import navigationService from '../navigationService';
import CustomImage from '../Components/CustomImage';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData, setUserWallet, setVoucherData, setWholeCart} from '../Store/slices/common';
import { Post } from '../Axios/AxiosInterceptorFunction';
import BookingDateModal from '../Components/BookingDateModal';

const PaymentScreen = props => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  console.log("🚀 ~ PaymentScreen ~ modalIsVisible:", modalIsVisible)
  const fromStore = props?.route?.params?.fromStore;
  const finalData = props?.route?.params?.finalData;
  const userData = useSelector(state => state.commonReducer.userData);
  console.log("🚀 ~ PaymentScreen ~ userData:", userData?.wallet?.amount)

  console.log("🚀 ~ file: PaymentScreen.js:33 ~ PaymentScreen ~ finalData:", finalData?.total)

  const dispatch = useDispatch();
  const token = useSelector(state=> state.authReducer.token)

  const [isLoading, setIsLoading] = useState(false);
  

  // const Booking = async () => {
  //   const selectedServiceIds = finalData?.services.map(service => service.id);
  //   const formData = new FormData()

  //   const body = {
  //     barber_id: finalData?.time?.barber_id,
  //     booking_date: finalData?.date,
  //     booking_time: finalData?.time?.time,
  //     service_time_id : finalData?.time?.id,
  //     image: finalData?.image && finalData?.image[0] ,
  //     custom_location:finalData?.location?.name,
  //     price: finalData?.total,
  //     // dis_price:!isNaN(finalData?.discount) ? finalData?.discount : 0 ,
  //   };
  //   if(!isNaN(finalData?.discount)){
  //     formData.append('dis_price', finalData?.discount)
  //   }
   
  //   for(let key in body){
  //     formData.append(key, body[key])
  //   }
  //   selectedServiceIds?.map((item, index)=>formData.append(`service_id[${index}]`, item))
  //     console.log('🚀 ~ file: PaymentScreen.js:50 ~ Booking ~ body:', body);
  //   const url = 'auth/booking';
  //   setIsLoading(true);   
  //   const response = await Post(url, formData, apiHeader(token));
  //   setIsLoading(false);

  //   if (response != undefined) {
  //     console.log( 'data =====> > >> ',response?.data)

  //      Platform.OS === 'android'
  //       ? ToastAndroid.show('Booking successful', ToastAndroid.SHORT)
  //       : Alert.alert('Booking successful');
       
  //       dispatch(setUserWallet(response?.data?.user_info?.wallet));
  //       dispatch(setVoucherData({}))

  //     Alert.alert('Insufficient credits',"Are You Sure to book this barber? ",
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //         onPress:() =>{
  //           navigationService.navigate('TabNavigation');
  //           // fromStore && dispatch(setWholeCart([]));
  //         }
  //       },
  //       {
  //         text: 'OK',
  //         onPress:() =>{
  //           setModalIsVisible(true)
  //         }
        
  //       },
  //     ]
  //     )

     
     
     

  //   }
  // };

  return (
    <ScreenBoiler
      showHeader={true}
      showBack={true}
      showUser={true}
      statusBarBackgroundColor={Color.black}
      statusBarContentStyle={'light-content'}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        colors={Color.themeGradient}
        style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: windowHeight * 0.15,
            // paddingTop : moderateScale(20,0.3),
            alignItems: 'center',
          }}
          style={{
            width: windowWidth,
          }}>
          <CustomText isBold style={styles.text1}>
            Payment
          </CustomText>
          <CustomText
            isBold
            style={[styles.subHeading, {width: windowWidth * 0.9}]}>
            Address
          </CustomText>
          <View style={[styles.container1, {height: windowHeight * 0.15}]}>
            <CustomImage
              source={require('../Assets/Images/address.png')}
              resizeMode={'stretch'}
              style={{
                width: windowWidth * 0.4,
                height: '100%',
              }}
            />
            <View
              style={{
                marginLeft: moderateScale(10, 0.3),
                justifyContent: 'center',
              }}>
              <CustomText
                isBold
                style={{
                  fontSize: moderateScale(12, 0.3),
                  width: windowWidth * 0.4,
                  color: Color.black,
                }}>
                Home Address:
              </CustomText>
              <CustomText
                style={{
                  fontSize: moderateScale(11, 0.3),
                  width: windowWidth * 0.4,
                  color: Color.themeLightGray,
                }}>
                {finalData?.location?.name}
              </CustomText>
            </View>
          </View>
          {fromStore && (
            <>
              <CustomText
                isBold
                style={[styles.subHeading, {width: windowWidth * 0.9}]}>
                Courier
              </CustomText>
              <View style={[styles.container1, {height: windowHeight * 0.06}]}>
                <CustomText
                  isBold
                  style={[
                    styles.subHeading,
                    {color: Color.black, marginTop: moderateScale(0, 0.3)},
                  ]}>
                  Regular
                </CustomText>
                <CustomText
                  style={[
                    styles.subHeading,
                    {
                      color: Color.themeLightGray,
                      marginTop: moderateScale(0, 0.3),
                    },
                  ]}>
                  3-6 days
                </CustomText>
                <CustomText
                  style={[
                    styles.subHeading,
                    {color: Color.black, marginTop: moderateScale(0, 0.3)},
                  ]}>
                  $2.05
                </CustomText>
              </View>
            </>
          )}
          <CustomText
            isBold
            style={[styles.subHeading, {width: windowWidth * 0.9}]}>
            payment method
          </CustomText>
          <View
            style={[
              styles.container1,
              {height: windowHeight * 0.1, justifyContent: 'flex-start'},
            ]}>
            <View
              style={{
                width: 50,
                height: 30,
                backgroundColor: '#000',
                marginLeft: moderateScale(20, 0.3),
              }}></View>
            <View
              style={{
                marginLeft: moderateScale(20, 0.3),
              }}>
              <CustomText
                style={[
                  styles.subHeading,
                  {color: Color.black, marginTop: moderateScale(0, 0.3)},
                ]}>
              Wallet
              </CustomText>

              <CustomText
                style={[
                  styles.subHeading,
                  {
                    color: Color.themeLightGray,
                    marginTop: moderateScale(0, 0.3),
                  },
                ]}>
               My wallet
              </CustomText>
            </View>
            <View style={styles.addCardContainer}>
              <Icon
                name="keyboard-arrow-down"
                as={MaterialIcons}
                size={moderateScale(20, 0.3)}
                color={Color.black}
              />
            </View>
          </View>
        </ScrollView>
        <CustomButton
      
          textColor={Color.black}
          onPress={() => {
            Booking();
          }}
          width={windowWidth * 0.9}
          height={windowHeight * 0.06}
          text={isLoading ? <ActivityIndicator color={Color.black} size={'small'}/> : 'Pay now'}
          fontSize={moderateScale(14, 0.3)}
          borderRadius={moderateScale(30, 0.4)}
          textTransform={'uppercase'}
          isGradient={true}
          isBold
          marginBottom={moderateScale(130, 0.3)}
        />
      </LinearGradient>
      <BookingDateModal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        bookingDate= {finalData?.date}
        bookingStartTime= {finalData?.time?.time}
        />
    </ScreenBoiler>
  );
};

export default PaymentScreen;

const styles = ScaledSheet.create({
  container: {
    paddingTop: windowHeight * 0.03,
    height: windowHeight * 0.9,
    width: windowWidth,
    alignItems: 'center',
  },
  text1: {
    textTransform: 'uppercase',
    color: Color.white,
    textAlign: 'center',
    fontSize: moderateScale(20, 0.3),
  },
  container1: {
    backgroundColor: Color.white,
    borderRadius:moderateScale(18, 0.6),
    width: windowWidth * 0.9,
    marginTop: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(10, 0.3),
    paddingVertical: moderateScale(5, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeading: {
    color: Color.white,
    fontSize: moderateScale(12, 0.3),
    marginTop: moderateScale(20, 0.3),
  },
  addCardContainer: {
    width: moderateScale(26, 0.3),
    height: moderateScale(26, 0.3),
    borderRadius: moderateScale(13, 0.3),
    backgroundColor: 'rgba(235, 219, 189, 1)',
    position: 'absolute',
    right: moderateScale(10, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
