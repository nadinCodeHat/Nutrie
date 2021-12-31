import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'

const screenWidth = Dimensions.get('window').width;

const App = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.selectedimage} source={require("../assets/images/yogurt_with_fruits_large.png")} />
            <Image style={styles.topimage} source={require("../assets/images/mask_group_up.png")} />
            <View style={styles.arrowwrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <Image source={require("../assets/icons/arrow_backward.png")} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require("../assets/icons/heart.png")} />
                </TouchableOpacity>
            </View>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={styles.allelements}>
                    <View style={styles.headingtext}>
                        <Text style={styles.heading}>Yogurt with fruits</Text>
                        <Text style={styles.fooddescription}>Quisque sit amet sagittis erat. Duis pharetra ornare venenatis. Nulla maximus porta velit ut molestie. Proin quis convallis mauris. In facilisis justo at mi pharetra lobortis. s.</Text>
                    </View>
                    <View style={styles.nutriinfocard}>
                        <Text style={styles.nutriinfortext}>Nutritional information</Text>
                        <View style={styles.nutriinfolayout}>
                            <View style={styles.nutriinfo}>
                                <Text style={styles.cal}>243</Text>
                                <Text style={styles.defaultnutri}>calories</Text>
                            </View>
                            <View style={styles.nutriinfo}>
                                <Text style={styles.defaultvalue}>2,8g</Text>
                                <Text style={styles.defaultnutri}>fat</Text>
                            </View>
                            <View style={styles.nutriinfo}>
                                <Text style={styles.defaultvalue}>45,7g</Text>
                                <Text style={styles.defaultnutri}>carbohyd</Text>
                            </View>
                            <View style={styles.nutriinfo}>
                                <Text style={styles.defaultvalue}>9,8g</Text>
                                <Text style={styles.defaultnutri}>proteins</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ingredientscard}>
                        <Text style={styles.cardheading}>Ingredients</Text>
                        <View style={styles.ingredientswrapper}>
                            <View style={styles.fooditems}>
                                <Image source={require("../assets/icons/kiwi.png")} />
                                <Text style={{ fontSize: 12, color: '#23233C', paddingTop: 7 }}>Kiwi</Text>
                            </View>
                            <View style={styles.fooditems}>
                                <Image source={require("../assets/icons/yogurt.png")} />
                                <Text style={{ fontSize: 12, color: '#23233C', paddingTop: 7 }}>Yogurt</Text>
                            </View>
                            <View style={styles.fooditems}>
                                <Image source={require("../assets/icons/cherry.png")} />
                                <Text style={{ fontSize: 12, color: '#23233C', paddingTop: 7 }}>Cherry</Text>
                            </View>
                            <View style={styles.fooditems}>
                                <Image source={require("../assets/icons/blueberry.png")} />
                                <Text style={{ fontSize: 12, color: '#23233C', paddingTop: 7 }}>Blueberry</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.preparationcard}>
                        <Text style={styles.cardheading}>Preparation</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <View style={styles.navbar}>
                    <TouchableOpacity style={styles.selectedbtn}>
                        <Image style={{ width: 25, height: 25 }} source={require("../assets/icons/home_50px.png")} />
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginLeft: 10 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultnavbtn}>
                        <Image style={{ width: 25, height: 25 }} source={require("../assets/icons/profile_50px.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultnavbtn}>
                        <Image style={{ width: 25, height: 25 }} source={require("../assets/icons/ribbon_50px.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultnavbtn}>
                        <Image style={{ width: 25, height: 25 }} source={require("../assets/icons/settings_50px.png")} />
                    </TouchableOpacity>
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
    topimage: {
        resizeMode: 'contain',
        position: 'absolute',
    },
    arrowwrapper: {
        justifyContent: 'space-between',
        width: 400,
        alignItems: 'center',
        resizeMode: 'contain',
        paddingTop: 102,
        position: 'absolute',
        flexDirection: 'row'
    },
    selectedimage: {
        marginTop: -50,
        width: screenWidth,
        height: 456,
    },
    allelements: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingtext: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 25,
        color: '#23233C',
        fontWeight: 'bold',
        paddingTop: 14,
    },
    fooddescription: {
        fontSize: 10,
        color: '#23233C',
        flexWrap: 'wrap',
        paddingLeft: 43,
        paddingRight: 43,
        paddingTop: 16,
    },
    nutriinfocard: {
        width: 375,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#0D4E81',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 5,
        alignItems: 'center',
        paddingTop: 17,
        marginTop: 20,
    },
    nutriinfortext: {
        fontSize: 16,
        color: '#23233C',
    },
    nutriinfolayout: {
        flexDirection: 'row',
        paddingTop: 18,
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nutriinfo: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    cal: {
        fontSize: 22,
        color: '#EE6A6E',
        fontWeight: 'bold',
    },
    defaultvalue: {
        fontSize: 22,
        color: '#23233C',
        fontWeight: 'bold',
    },
    defaultnutri: {
        fontSize: 10,
        color: '#9E9E9E',
    },
    ingredientscard: {
        width: 375,
        height: 145,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#0D4E81',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 5,
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 12,
    },
    cardheading: {
        fontSize: 18,
        color: '#303030',
        fontWeight: 'bold',
    },
    ingredientswrapper: {
        flexDirection: 'row',
        paddingTop: 18,
        alignItems: 'center',
        width: 230,
        justifyContent: 'space-between'
    },
    fooditems: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    preparationcard: {
        width: 375,
        height: 145,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#0D4E81',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 5,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 17,
        paddingTop: 12,
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