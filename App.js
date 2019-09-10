import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import IndexScreen from './src/screens/IndexScreen'
import {Provider} from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
)

const App = createAppContainer(navigator)

const styles = StyleSheet.create({});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}