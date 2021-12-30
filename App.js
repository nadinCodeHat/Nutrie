import React, { useEffect } from 'react'
import { Text, Image, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './components/Login'
import Ask from './components/Ask'
import HomeScreen from './components/HomeScreen'
import Details from './components/Details'

const imageWidth = Dimensions.get('window').width;
const Stack = createNativeStackNavigator();

function SliderScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.backgroundimage} source={require("./assets/images/slide_background_image.png")} />
      <View style={styles.bottom}>
        <Image style={styles.backgroundimagewhite} source={require("./assets/images/slide_background_white.png")} />
        <View style={styles.circleview}>
          <Image style={styles.circle} source={require("./assets/icons/green_filled_circle_50px.png")} />
          <Image style={styles.circle} source={require("./assets/icons/grey_filled_circle_50px.png")} />
          <Image style={styles.circle} source={require("./assets/icons/grey_filled_circle_50px.png")} />
        </View>
        <View style={styles.content}>
          <Text style={styles.heading}> best tips for your diet </Text>
          <Text style={styles.descriptiontext}>Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis. s.</Text>
          <View style={styles.buttons}>
            <Text style={styles.skipstep}>Skip step</Text>
            <View style={styles.nextbtnview}>
              <TouchableOpacity style={styles.nextbtn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.nextbtntext}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function App() {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Slider" component={SliderScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Ask" component={Ask} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundimage: {
    width: 430,
    resizeMode: 'stretch',
    height: 630,
    overflow: 'hidden',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundimagewhite: {
    width: imageWidth,
    position: 'absolute',
    bottom: 0,
  },
  circleview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
  },
  content: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-start',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#23233C',
  },
  descriptiontext: {
    fontSize: 10,
    color: '#A5A5A5',
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  skipstep: {
    fontSize: 15,
    color: '#B4B4B4',
    marginHorizontal: 60,
  },
  nextbtnview: {
    marginHorizontal: 60,
  },
  nextbtn: {
    width: 115,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#6CC57C',
    justifyContent: 'center',
    alignItems: 'center',

  },
  nextbtntext: {
    fontSize: 15,
    color: 'white',
  }
});