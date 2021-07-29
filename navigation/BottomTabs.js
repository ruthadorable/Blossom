import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons,MaterialCommunityIcons,FontAwesome5,Ionicons,Fontisto } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SearchScreen from '../screens/SearchScreen';
import CameraScreen from '../screens/CameraScreen';
import MyPlantsScreen from '../screens/MyPlantsScreen';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator 
          tabBarOptions={{
            showLabel: false,
            style:{
             
              margin:10,
              elevation:0,
              backgroundColor: "#6ec27c",
              borderRadius: 20,
              height: 70,
            }
          }}
          screenOptions={({route})=>({
            tabBarIcon: ()=>{
              let iconName;
              if(route.name=="Home"){
                iconName="home"
                return <MaterialIcons name={iconName} size={24} color="white"/>
              }else if(route.name=="Calendar"){
                iconName="calendar-alt"
                return <FontAwesome5 name={iconName} size={24} color="white"/>
              }else if(route.name=="Camera"){
                iconName="camera"
                return <Fontisto name={iconName} size={27} color="white"/>
              }else if(route.name=="MyPlants"){
                iconName="flower-tulip"
                return <MaterialCommunityIcons name={iconName} size={24} color="white" />
              }else if(route.name=="Search"){
                iconName="search"
                return <FontAwesome5 name={iconName} size={24} color="white"/>
              }
            } 
            })}>
      
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen}/>
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="MyPlants" component={MyPlantsScreen}/>
      <Tab.Screen name="Search" component={SearchScreen}/>
      </Tab.Navigator>
    )
}

export default BottomTabs;
