import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import {createSwitchNavigator} from 'react-navigation'
import MyNavigator from './Navigation/Navigation'
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
const firebase = require("firebase");
  
require("firebase/firestore");



  firebase.initializeApp({
    apiKey: "AIzaSyB6j7YXn4WMYfidq7QXe8pvTtkmV025woc",
    authDomain: "app-toss.firebaseapp.com",
    projectId: "app-toss"
  });

  

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
          <AppLoading />
        
      );
    }
    return (
        <MyNavigator />
      
    );
  }
}

// export default createSwitchNavigator({
//   AuthLoading:AuthLoadingScreen,
//   Auth:MyNavigator
// })