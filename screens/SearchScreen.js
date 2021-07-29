import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
const SearchScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>
                Grow A Plant 
            </Text>
        </View>
            
    )
}

export default SearchScreen;
 const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgreen',
    },
    text:{
        color: '#000',
        fontWeight:'700',
        fonttSize:30,
    }     
 });
