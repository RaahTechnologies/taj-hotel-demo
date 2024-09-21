/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginPage from './pages/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardPage from './pages/NavigationPage.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppSelector, useAppDispatch} from './store/hooks.ts';
import {setStoredCredentials} from './store/authSlice.ts';
import NavigationPage from './pages/NavigationPage.tsx';

function Root(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  const [isAppReady, setIsAppReady] = useState(false);
  const storedCredentials = useAppSelector(state => state.storedCredentials);
  const dispatch = useAppDispatch();
  // const [storedCredentials, setStoredCredentials] = useState('');

  const checkForLoginDetails = async () => {
    try {
      const credentials = await AsyncStorage.getItem('loginCredentials');

      if (credentials !== null) {
        dispatch(setStoredCredentials(JSON.parse(credentials)));
      } else dispatch(setStoredCredentials(''));
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   checkForLoginDetails();
  // });

  return (
    <NavigationContainer>
      <SafeAreaView style={{...backgroundStyle, flex: 1}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name="Login" component={LoginPage} /> */}

          <Stack.Screen name="Navigation" component={NavigationPage} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;
