import React, { useState, useEffect } from 'react'
import { Text, Image, View, SafeAreaView, StyleSheet, Pressable, ScrollView } from 'react-native'
//import CircularProgress from 'react-native-circular-progress-indicator'

const App = ({ navigation }) => {

  const [currentDate, getCurrentDate] = useState('');
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    var date = new Date();
    var day = date.getDate();
    let longMonth = monthNames[date.getMonth()];
    var year = date.getFullYear();
    getCurrentDate(
      'Today, ' + day + ' ' + longMonth + ' ' + year
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/images/mask_group_up.png")} />
      <View style={styles.headerview}>
        <View style={styles.view1}>
          <Text style={styles.activity}>Activity</Text>
          <Image style={styles.expandarrow} source={require("../assets/images/expand_arrow_120px.png")} />
        </View>
        <View style={styles.view2}>
          <Text style={styles.datetext}>{currentDate}</Text>
        </View>
      </View>
      <View style={styles.cardlayout}>
        <ScrollView horizontal={true}>
          <View style={styles.card1}>
            <View>
              <Text style={{ fontSize: 16, color: '#23233C', fontWeight: 'bold' }}>Results of the week</Text>
              <View style={styles.details}>
                <View styles={{ flexDirection: 'column', }}>
                  <Text>you have lost</Text>
                  <Text>-4kg</Text>
                </View>
                <View styles={{ flexDirection: 'column', }}>
                  <Text>you level up</Text>
                  <Text>Level 8</Text>
                </View>
                {/*<CircularProgress
                value={60}
                radius={120}
                duration={2000}
                textColor={'#ecf0f1'}
                maxValue={200}
                title={'KM/H'}
                titleColor={'white'}
                titleStyle={{ fontWeight: 'bold' }}
              />*/}
              </View>
            </View>
          </View>
          <View style={styles.card2}>
            <View>
              <Text>Your information</Text>
              <Text>you have lost</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonview}>
        <Pressable style={styles.breakfastbtn}>
          <Text style={styles.breakfasttext}>Breakfast</Text>
        </Pressable>
        <Pressable style={styles.defaultbtn}>
          <Text style={styles.defaulttext}>Foods</Text>
        </Pressable>
        <Pressable style={styles.defaultbtn}>
          <Text style={styles.defaulttext}>Dinner</Text>
        </Pressable>
      </View>
      <ScrollView horizontal={true}>
        <Image source={require("../assets/images/raisins_and_banana.png")} />
        <Image source={require("../assets/images/yogurt_with_fruits.png")} />
        <Image source={require("../assets/images/pie.png")} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5FA',
  },
  headerview: {
    flexDirection: 'row',
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  activity: {
    fontSize: 25,
    color: '#23233C',
    fontWeight: 'bold',
  },
  expandarrow: {
    marginLeft: 10,
    width: 40,
    height: 40,
  },
  view2: {
    marginHorizontal: 80,
    justifyContent: 'center'
  },
  datetext: {
    fontSize: 12,
    color: '#23233C',
  },
  cardlayout: {
    flexDirection: 'row',
    marginTop: 20,
  },
  card1: {
    width: 266,
    height: 131,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 30,
  },
  card2: {
    width: 266,
    height: 131,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  details: {
    flexDirection: 'row'
  },
  breakfastbtn: {
    width: 133,
    height: 37,
    backgroundColor: '#6CC57C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  breakfasttext: {
    fontSize: 15,
    color: 'white',
  },
  defaultbtn: {
    width: 133,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaulttext: {
    fontSize: 15,
    color: '#23233C',
  },
  buttonview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 40,
    marginLeft: 30,
  },
});