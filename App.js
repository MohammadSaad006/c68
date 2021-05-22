import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook  from './screens/BookTscreen'
import Instagram from './screens/Searchscreen'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

var TabNavigator = createBottomTabNavigator ({
  Facebook :Facebook ,
  Instagram: Instagram
})
const Appcontainer = createAppContainer(TabNavigator)