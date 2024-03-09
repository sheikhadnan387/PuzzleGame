import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from './src/utils/routes';
import CategorySelection from './src/screens/CategorySelection';
import PlayGame from './src/screens/PlayGame';
import {navigationRef, isReadyRef, routeNameRef} from './rootNavigation';
import LeaderBoard from './src/screens/LeaderBoard';
import 'react-native-gesture-handler';
import {ToastProvider} from 'react-native-toast-notifications';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <ToastProvider
      placement={'top' || 'bottom'}
      duration={2000}
      animationType={'slide-in' || 'zoom-in'}
      successColor="green"
      dangerColor="red"
      warningColor="orange"
      normalColor="gray"
      textStyle={{fontSize: 14}}
      offset={50}
      offsetTop={30}
      offsetBottom={40}
      swipeEnabled={true}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current =
            navigationRef?.current?.getCurrentRoute()?.name;
          isReadyRef.current = true;
        }}>
        <Stack.Navigator
          initialRouteName={ROUTES?.CategorySelection}
          screenOptions={{
            headerTitleAlign: 'center',
            headerShown: false,
          }}>
          <Stack.Screen
            name={ROUTES?.CategorySelection}
            component={CategorySelection}
          />
          <Stack.Screen name={ROUTES?.PlayGame} component={PlayGame} />
          <Stack.Screen name={ROUTES?.LeaderBoard} component={LeaderBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
};
export default App;
