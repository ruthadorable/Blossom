import React from 'react'
import {View, StyleSheet,Text,TouchableOpacity,Dimensions,Image } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableHighlight,
    TouchableRipple,
    Switch} from 'react-native-paper';
import * as Animatable from 'react-native-animatable' 
import LOGO from '../assets/ginkgo.jpg'

const HomeScreen =  ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Avatar.Image source={LOGO} size={80} animation="bounceIn" duration="1500"/>
            <Text style={styles.text}>Grow A Plant</Text>
            <Title>Welcome to Blossom </Title>
            <TouchableOpacity 
                onPress={()=>navigation.navigate('Login',{msg:"From Screen 1"})} 
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;
const {height} =Dimensions.get("screen");
const height_logo=height*0.28;

const styles = StyleSheet.create({
    screen:{
        height:height,
        backgroundColor:'#d8ffd6',
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    header:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    logo:{
        width: height_logo,
        height: height_logo,
    },
    title:{
        color: "#05375a",
        fontSize: 30,
        fontWeight:'bold',
    },
    text:{
        color: 'grey',
        marginTop:5,
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
        height: 50,
        width:100,
        borderColor:"#6ec27c",
        backgroundColor:"#6ec27c",
        borderRadius: 10,
        
    },
    buttonText:{
        fontSize: 24,
        fontFamily: 'cursive',
        fontWeight: 'bold',

    },
    logIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
    },
    textSign:{
        color:'white',
        fontWeight: 'bold',
    }
});