import React from 'react'
import { Text, Image, View, SafeAreaView, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'

const imageWidth = Dimensions.get('window').width;

const App = ({ navigation }) => {

  const [email, onChangeEmail] = React.useState("nadinCodeHat@awesome.io");
  const [password, onChangePassword] = React.useState("***********");

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/mask_group_up.png")} />
      <View>
        <Text style={styles.heading}>Welcome</Text>
      </View>
      <View style={styles.allelements}>
        <TextInput
          style={styles.email}
          onChangeEmail={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.password}
          onChangePassword={onChangePassword}
          value={password}
        />
        <Text style={styles.normtext}>Forgot your password?</Text>
        <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate('Ask')}>
          <Text style={styles.loginbtntext}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>
          <Text style={styles.normtext}>Don't have an account?</Text>
          <Text style={{ fontWeight: 'bold', color: '#8D8D8D' }}> sign up </Text>
        </Text>
        <View style={styles.othersignup}>
          <TouchableOpacity style={styles.facebooksignup}>
            <Image style={{ width: 12, height: 24 }} source={require("../assets/icons/facebook_120px.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.googlesignup}>
            <Image style={{ width: 24, height: 24 }} source={require("../assets/icons/google_120px.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Image style={styles.imageBottom} source={require("../assets/images/mask_group_down.png")} />
      </View>
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5FA',
  },
  heading: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: '#23233C',
  },
  allelements: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  email: {
    width: 336,
    height: 54,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 14,
    color: '#23233C',
    shadowColor: '#0D4E81',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 5,
    paddingLeft: 20,
  },
  password: {
    marginTop: 30,
    width: 336,
    height: 54,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 14,
    color: '#23233C',
    shadowColor: '#0D4E81',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 5,
    paddingLeft: 20,
  },
  normtext: {
    marginTop: 20,
    fontSize: 13,
    color: '#8D8D8D',
  },
  loginbtn: {
    marginTop: 20,
    backgroundColor: '#23233C',
    width: 333,
    height: 54,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbtntext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  othersignup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  facebooksignup: {
    width: 82,
    height: 51,
    backgroundColor: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  googlesignup: {
    width: 82,
    height: 51,
    backgroundColor: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageBottom: {
    width: imageWidth,
    position: 'absolute',
    bottom: 0,
  }
});