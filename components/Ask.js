import React from 'react'
import { Text, Image, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const App = ({ navigation }) => {

    const [currentWeight, onChangeWeight] = React.useState("What is your current weight?");
    const [currentHeight, onChangeHeight] = React.useState("What is your current height?");

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require("../assets/images/mask_group_up.png")} />
            <View style={styles.allelements}>
                <Image style={styles.imageheader} source={require("../assets/images/ask_background_image.png")} />
                <Text style={styles.heading}>Let's do your diet{" "}
                    <Text style={styles.highlight}>nadin</Text>
                </Text>
                <TextInput
                    style={styles.currentweight}
                    onChangeWeight={onChangeWeight}
                    value={currentWeight}
                />
                <TextInput
                    style={styles.currentheight}
                    onChangeHeight={onChangeHeight}
                    value={currentHeight}
                />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.steps}>1/4 steps</Text>
                <View style={styles.nextbtn} >
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('HomeScreen')}>
                        <Image style={{ width: 60, height: 60 }} source={require("../assets/icons/forward_120px.png")} />
                    </TouchableOpacity>
                    <Text style={styles.nexttext} >Next</Text>
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
    allelements: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageheader: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    heading: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        color: '#23233C',
    },
    highlight: {
        color: '#6CC57C',
    },
    currentweight: {
        marginTop: 50,
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
    currentheight: {
        marginTop: 20,
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
    bottom: {
        marginTop: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    steps: {
        fontSize: 16,
        color: '#B4B4B4',
        marginHorizontal: 60,
        alignItems: 'center',
    },
    nextbtn: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5,
    },
    btn: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#23233C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nexttext: {
        fontSize: 16,
    },
});