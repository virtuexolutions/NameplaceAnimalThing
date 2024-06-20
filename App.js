import React, {useEffect, useState} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

import {store, persistor} from './SRC/Store/index';
import {
  requestCameraPermission,
  requestLocationPermission,
  requestWritePermission,
} from './SRC/Utillity/utils';
import SplashScreen from './SRC/Screens/SplashScreen';
import AppNavigator from './SRC/appNavigation';
import { Platform } from 'react-native';
import Walkthrough from './SRC/Screens/Walkthrough';
import Homescreen from './SRC/Screens/GamePlayScreen';
import ChooseYourTeamScreen from './SRC/Screens/ChooseYourTeamScreen';
import WalkThroughScreen from './SRC/Screens/Walkthrough';
import LoginScreen from './SRC/Screens/LoginScreen';
import Signup from './SRC/Screens/Signup';
import StartScreen from './SRC/Screens/StartScreen';
import ChoosePlayModeScreen from './SRC/Screens/ChoosePlayModeScreen';
import GamePlayScreen from './SRC/Screens/GamePlayScreen';





const App = () => {
  return (
  //   <StripeProvider
  //   publishableKey={"pk_test_51McSueJ0WRwehn2Uuf4rm6WNHPQvaJY9NGU235gUEqPA3AJuc9Mq1x98Y8B8uE5eMfivo5l2xK4Vau21zau7ZBDp00g7qWfkx3"}
  //   // merchantIdentifier="merchant.identifier" // required for Apple Pay
  //   // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
  // >
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <NativeBaseProvider>
      <MainContainer/>
    </NativeBaseProvider>

    </PersistGate>


   </Provider>
  )
  {/* </StripeProvider> */}
  
  ;
};

const MainContainer =()=>{

  const dispatch = useDispatch();

  useEffect(() => {
    async function GetPermission() {
      console.log('here');
      await requestCameraPermission();
      await requestWritePermission();
      await requestLocationPermission();
    }
    
    if(Platform.OS == 'android'){

      GetPermission();
    }
  }, []);

  const [isloading] = useloader(true);
  if (isloading == true) {
    return <SplashScreen />;
  }
  // return <ChooseYourTeamScreen/>
  // return <SplashScreen />;
  // return <GamePlayScreen/>;

  // return <WalkThroughScreen />; 
  // return <Signup/>
  return <LoginScreen/>
  // return <StartScreen/>
  // return <ChoosePlayModeScreen/>
  // return <AppNavigator/>
  
}


const useloader = value => {
  const [isloading, setIsloading] = useState(value);
  const [loadingTime] = useState(5500);
  useEffect(() => {
    setTimeout(() => setIsloading(false), loadingTime);
  }, []);
  return [isloading];
};


export default App;
