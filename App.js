import React,{ Component } from 'react'
import { View, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }

  render() {
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Demo Display</Text>
      </View>
    )
  }
}