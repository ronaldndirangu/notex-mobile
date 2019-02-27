import React, { Component } from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import AddNote from '../screens/AddNote';
import ViewNote from '../screens/ViewNote';
import { colors } from '../colors';

export const NoteStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'My Notes',
      headerTitleStyle: {
        color: colors.secondary
      }
    })
  },
  ViewNote: {
    screen: ViewNote
  }
}, {
  initialRouteName: 'Home'
});

export const Tabs = createBottomTabNavigator({
  'My Notes': {
    screen: NoteStack
  },
  'Add Note': {
    screen: AddNote
  }
}, {
  initialRouteName: 'My Notes'
});


export const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    })
  }
});

export const AppNavigator = createSwitchNavigator({
  Tabs: Tabs,
  Auth: AuthStack
}, {
  initialRouteName: 'Auth'
});

export default createAppContainer(AppNavigator);
