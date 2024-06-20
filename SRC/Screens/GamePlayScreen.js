import React, {useState, useEffect} from 'react';
import {ImageBackground, View, ScrollView, FlatList} from 'react-native';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

import {useIsFocused} from '@react-navigation/native';
import {Icon} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Components/CustomButton';
import {color} from 'react-native-reanimated';
import { border } from 'native-base/lib/typescript/theme/styled-system';
import TextInputWithTitle from '../Components/TextInputWithTitle';

const GamePlayScreen = () => {
  const user = useSelector(state => state.commonReducer.userData);

  const token = useSelector(state => state.authReducer.token);
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [place, setPlace] = useState('');
  const [things, setThings] = useState('');

  const data = [
    {
      id: 1,
      text: 'coins',
      image: require('../Assets/Images/Coin.png'),
    },
    {
      id: 2,
      text: 'reward',
      image: require('../Assets/Images/gift2.png'),
    },
    {
      id: 3,
      text: 'shop',
      image: require('../Assets/Images/treasure.png'),
    },
  ];

  const participantsData = [
    {
      id: 1,
      name: 'rosemarry',
      image: require('../Assets/Images/user1.png'),
      score: '00',
      bgimage: require('../Assets/Images/bguser1.png'),
    },
    {
      id: 2,
      name: 'randy d',
      image: require('../Assets/Images/user2.png'),
      score: '00',
      bgimage: require('../Assets/Images/bguser2.png'),
    },
    {
      id: 3,
      name: 'margaret',
      image: require('../Assets/Images/user3.png'),
      score: '00',
      bgimage: require('../Assets/Images/bguser1.png'),
    },
  ];

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
            paddingBottom: windowHeight * 0.155,

            alignItems: 'center',
          }}
          style={
            {
              // width: windowWidth,
            }
          }>
          <View style={styles.mainrow}>
            <View style={styles.row1}>
              <View style={styles.image}>
                <CustomImage
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={require('../Assets/Images/user1.png')}
                />
                {/* <Icon
                  style={styles.icon}
                  name={'star'}
                  as={AntDesign}
                  size={moderateScale(20, 0.6)}
                  // color={'yellow'}
                /> */}
              </View>
              <View style={styles.box}>
                <CustomText style={styles.text1}>murtaza</CustomText>
                <View style={styles.level}>
                  <View style={styles.levelfill}></View>
                </View>
              </View>
            </View>
            <FlatList
              showsVerticalScrollIndicator={false}
              numColumns={3}
              contentContainerStyle={{
                width: '100%',
                alignItems: 'flex-end',
              }}
              data={data}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.flatcontainer}>
                    <CustomImage style={styles.image2} source={item?.image} />
                    <CustomText isBold style={styles.text}>
                      {item?.text}
                    </CustomText>
                  </View>
                );
              }}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={3}
            contentContainerStyle={{
              width: '100%',
              alignItems: 'flex-end',
            }}
            data={participantsData}
            renderItem={({item, index}) => {
              return (
                <ImageBackground
                  style={styles.card}
                  resizeMode={'stretch'}
                  source={item?.bgimage}>
                  {/* <View style={styles.card}> */}
                  <CustomImage style={styles.cardimage2} source={item?.image} />
                  <CustomText isBold style={styles.cardtext}>
                    {item?.name}
                  </CustomText>
                  <View style={styles.level}>
                    <View style={styles.levelfill}></View>
                  </View>
                  {/* <CustomButton
                    disabled={true}
                    // iconName={'user'}
                    // iconType={Feather}
                    // bgColor={'lightblue'}
                    borderColor={'#FFFFFF'}
                    borderWidth={2}
                    textColor={Color.white}
                    width={windowWidth * 0.5}
                    height={windowHeight * 0.07}
                    borderRadius={moderateScale(25, 0.6)}
                    text={'score'}
                    isGradient
                    fontSize={moderateScale(18, 0.3)}
                    isBold
                    gradientColor={['#8BCCFD', '#1B9CEF']}
                    // marginTop={moderateScale(10, 0.3)}
                  /> */}
                  <LinearGradient
                    start={{x: 0.0, y: 0.25}}
                    end={{x: 0.5, y: 1.0}}
                    colors={['#8BCCFD', '#1B9CEF']}
                    style={{
                      backgroundColor: 'lightblue',
                      borderRadius: moderateScale(20, 0.6),
                      marginVertical: moderateScale(5, 0.3),
                      // marginHorizontal :moderateScale(20,.6),
                      width: windowWidth * 0.25,
                      height: windowHeight * 0.05,
                      alignItems: 'center',
                      // paddingVertical :moderateScale(2,.6)
                      // justifyContent: 'center',
                    }}>
                    <CustomText
                      isBold
                      style={{
                        color: Color.white,
                        paddingTop:moderateScale(2,.6),
                        fontSize: moderateScale(14, 0.6),
                      }}>
                      00
                    </CustomText>
                    <CustomText
                      isBold
                      style={{
                        marginTop:moderateScale(-7,.3),
                        // paddingTop:moderateScale(-10,.6),
                        color: Color.white,
                        fontSize: moderateScale(14, 0.6),
                      }}>
                      Score
                    </CustomText>
                    </LinearGradient>
                </ImageBackground>
              );
            }}
          />
          <View style={styles.box2}>
            <CustomImage source={require('../Assets/Images/alphabet.png')} 
            // style={{elevation: 6}} 
            />
          <LinearGradient
                    start={{x: 0.0, y: 0.25}}
                    end={{x: 0.5, y: 1.0}}
                    colors={['#8BCCFD', '#1B9CEF']}
                    style={{
                      backgroundColor: 'lightblue',
                      borderRadius: moderateScale(30, 0.6),
                      marginVertical: moderateScale(5, 0.3),
                      width: windowWidth * 0.35,
                      height: windowHeight * 0.075,
                      alignItems: 'center',
                      position:'absolute',
                      bottom :-30,
                      }}>
                    <CustomText
                      isBold
                      style={{
                        color: Color.white,
                        paddingTop:moderateScale(2,.6),
                        fontSize: moderateScale(18, 0.6),
                      }}>
                      00
                    </CustomText>
                    <CustomText
                      isBold
                      style={{
                        marginTop:moderateScale(-7,.3),
                        // paddingTop:moderateScale(-10,.6),
                        color: Color.white,
                        fontSize: moderateScale(20, 0.6),
                      }}>
                      Score
                    </CustomText>
                    </LinearGradient>
          </View>
          <View style={{ marginTop:moderateScale(15,0.4),gap:moderateScale(12,0.2)}}>

          <TextInputWithTitle
            // titleText={'user Name'}
            placeholder={'Name.....'}
            setText={setName}
            value={name}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.74}
            border={moderateScale(1,0.2)}
            borderColor={'white'}
            backgroundColor={'#c1eaf5'}
            marginTop={moderateScale(12, 0.3)}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(12, 0.4)}
          />
             <TextInputWithTitle
            // titleText={'user Name'}
            placeholder={'place.....'}
            setText={setPlace}
            value={place}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.74}
            border={moderateScale(1,0.2)}
            borderColor={'white'}
            backgroundColor={'#c1eaf5'}
            marginTop={moderateScale(12, 0.3)}
            placeholderColor={Color.themeLightGray}
            color={Color.themeColor}
            borderRadius={moderateScale(12, 0.4)}
          />
             <TextInputWithTitle
            // titleText={'user Name'}
            placeholder={'animal.....'}
            setText={setAnimal}
            value={animal}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.74}
            border={moderateScale(1,0.2)}
            borderColor={'white'}
            backgroundColor={'#c1eaf5'}
            marginTop={moderateScale(12, 0.3)}
            color={Color.themeColor}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(12, 0.4)}
            />
             <TextInputWithTitle
            placeholder={'Things....'}
            setText={setThings}
            value={things}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.74}
            border={moderateScale(1,0.2)}
            borderColor={'white'}
            backgroundColor={'#c1eaf5'}
            marginTop={moderateScale(12, 0.3)}
            color={Color.themeColor}
            placeholderColor={Color.themeLightGray}
            borderRadius={moderateScale(12, 0.4)}
            />
      <CustomButton
        width={windowWidth * 0.45}
        height={windowHeight * 0.075}
        shadowprop={true}
        text={'Submit'}
        isBold
        style={{
          fontFamily: 'Sugar-Bomb',
          // position: 'absolute',
          // bottom: moderateScale(55, 0.4),
        }}
        marginTop={moderateScale(8, 0.2)}
        // textTransform={"capitalize"}
        textColor={'white'}
        borderRadius={moderateScale(25, 0.2)}
        isGradient
        gradientColor={['#8BCCFD', '#1E9DEF']}
      />
            {/* <CustomButton
            width: windowWidth * 0.45,
            height: windowHeight * 0.065,
            
            /> */}
            </View>
        </ScrollView>
      </ImageBackground>
      {/* </LinearGradient> */}
    </ScreenBoiler>
  );
};

export default GamePlayScreen;

const styles = ScaledSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
  },
  image: {
    height: windowHeight * 0.05,
    width: windowHeight * 0.05,
    borderRadius: (windowHeight * 0.05) / 2,
    // backgroundColor: 'red',
  },
  flatcontainer: {
    width: windowWidth * 0.15,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: 'white',
    // marginRight: moderateScale(-1,.3)
  },
  image2: {
    height: windowHeight * 0.035,
    width: windowHeight * 0.035,
    // backgroundColor: 'red',
    borderRadius: (windowHeight * 0.035) / 2,
  },
  text: {
    fontSize: moderateScale(10, 0.6),
    color: 'white',
  },
  mainrow: {
    // backgroundColor: 'pink',
    width: windowWidth,
    borderBottomWidth: moderateScale(1, 0.6),
    borderColor: 'white',
    paddingHorizontal: moderateScale(8, 0.6),
    flexDirection: 'row',
    paddingVertical: moderateScale(10, 0.6),
  },
  row1: {
    flexDirection: 'row',
    width: windowWidth * 0.3,
    // backgroundColor: 'green',
  },
  icon: {
    position: 'absolute',
    right: -10,
    bottom: -5,
  },
  box: {
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(5, 0.6),
  },
  text1: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
    width: windowWidth * 0.4,
  },
  level: {
    height: windowHeight * 0.007,
    width: windowWidth * 0.18,
    backgroundColor: 'white',
    borderRadius: moderateScale(10, 0.6),
  },
  levelfill: {
    height: windowHeight * 0.007,
    // width: windowWidth * 0.12,
    width:'70%',
    backgroundColor: '#FFC400',
    borderRadius: moderateScale(10, 0.6),
  },
  card: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.3,
    // backgroundColor: 'red',
    alignItems: 'center',
    marginHorizontal: moderateScale(2, 0.6),
  },
  cardimage2: {
    height: windowHeight * 0.09,
    width: windowHeight * 0.09,
    borderRadius: (windowHeight * 0.09) / 2,
    // backgroundColor: 'green',
    marginVertical: moderateScale(5, 0.3),
  },
  cardtext: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
    width: '100%',
    textAlign: 'center',
  },box2:{
    marginVertical :moderateScale(25,.3),
    backgroundColor :'#d2eff7',
    width :windowWidth*0.6,
    height:windowHeight*0.2,
    borderRadius :moderateScale(35,.6),
    alignItems :'center'
  },

});
