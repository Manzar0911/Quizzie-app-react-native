import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Title from "../components/title";

const Result = ({navigation, route}) => {
    const {score} = route.params;

    const resultBanner = score>40?require('../images/victory.png'):require('../images/failure.png')

    return (
        <View style={styles.container}>
            <Title titleText='RESULTS' />
            <Text style={styles.scoreValue}>{score}</Text>
            <View style={styles.bannerContainer}>
                {/* <Image
                 style={styles.banner}
                 source={{uri: 'https://th.bing.com/th/id/OIP.hsKSPokxwSiShAnnXB3z6wHaEl?pid=ImgDet&rs=1',}}
                 resizeMode="contain"
                /> */}
                <Image 
                source={resultBanner}
                style={styles.banner}
                resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText}>GO TO Home</Text>
            </TouchableOpacity>
        </View>
    )
};

export default Result;


const styles = StyleSheet.create({
    banner: {
        heigh: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,  
        height: '100%', 
    },
    button: {
        width: "100%",
        backgroundColor: "#1A759F",
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize:24,
        fontWeight: '600',
        color: 'white',
    },
    scoreValue: {
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
    }
});