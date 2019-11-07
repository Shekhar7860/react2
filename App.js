/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { StyleSheet} from 'react-native'
import Welcome from './src/components/Welcome'
import Splash from './src/components/Splash'
import Login from './src/components/Login'
import Register from './src/components/Register'
import SelectItems from './src/components/SelectItems'
import Home from './src/components/Home'
import Home2 from './src/components/Home2'
const App = createStackNavigator({
  Splash: {
    screen: Splash,
  },
  Welcome: {
    screen: Welcome,
  }, 
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Select: {
    screen: SelectItems,
  },
  Home: {
    screen: Home,
  },
  Home2: {
    screen: Home2,
  }
});

export default createAppContainer(App);


const styles = StyleSheet.create({
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});


