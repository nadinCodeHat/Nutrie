import React, { useState, useEffect } from 'react'
import { Text, Image, View, SafeAreaView, StyleSheet, Pressable, ScrollView, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width;

const App = (navigation) => {

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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
      <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.imageviews}>
          <View style={styles.shadowview}>
            <Image source={require("../assets/images/raisins_and_banana.png")} />
          </View>
          <Text style={styles.defaultimagetext}>Yogurt with Fruits</Text>
        </View>
        <View style={styles.imageviews}>
          <View style={styles.shadowview}>
            <Image source={require("../assets/images/yogurt_with_fruits.png")} />
          </View>
          <Text style={styles.selectedtext}>Yogurt with Fruits</Text>
        </View>
        <View style={styles.imageviews}>
          <View style={styles.shadowview}>
            <Image source={require("../assets/images/pie.png")} />
          </View>
          <Text style={styles.defaultimagetext}>Yogurt with Fruits</Text>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.navbar}>
          <Pressable style={styles.selectedbtn}>
            <Image style={{width: 25, height: 25}} source={require("../assets/images/home_50px.png")} />
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginLeft: 10}}>Home</Text>
          </Pressable>
          <Pressable style={styles.defaultnavbtn}>
            <Image style={{width: 25, height: 25}} source={require("../assets/images/profile_50px.png")} />
          </Pressable>
          <Pressable style={styles.defaultnavbtn}>
            <Image style={{width: 25, height: 25}} source={require("../assets/images/ribbon_50px.png")} />
          </Pressable>
          <Pressable style={styles.defaultnavbtn}>
            <Image style={{width: 25, height: 25}} source={require("../assets/images/settings_50px.png")} />
          </Pressable>
        </View>
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
  contentContainer: {
    height: 420,
    alignItems: 'center'
  },
  imageviews: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  shadowview: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: '#0C256C',
    shadowOpacity: .13,
    elevation: 10,
  },
  defaultimagetext: {
    color: '#312D2D',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.16,
    marginTop: 20,
  },
  selectedtext: {
    color: '#312D2D',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  bottom: {
    backgroundColor: 'white',
    width: screenWidth,
    height: 65,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
  },
  navbar: {
    flexDirection: 'row',
    marginStart: 20,
    alignItems: 'center',
  },
  selectedbtn: {
    flexDirection: 'row',
    width: 101,
    height: 33,
    backgroundColor: '#6CC57C',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 40,
  },
  defaultnavbtn: {
    marginStart: 40,
  },
});