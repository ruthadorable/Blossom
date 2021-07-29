import React from 'react';
import BottomTabs from './navigation/BottomTabs';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {RootStack,FirstScreenNavigator, SecondScreenNavigator, ThirdScreenNavigator,FourthScreenNavigator,FifthScreenNavigator} from './navigation/CustomNavigation'
const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <RootStack/>
        <BottomTabs/>
      </NavigationContainer>
    </>
  );
};


export default App;