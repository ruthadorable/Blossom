import React from "react";
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import NestedScreen from "../screens/NestedScreen";
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import CameraScreen from "../screens/CameraScreen";
import SearchScreen from "../screens/SearchScreen";
import MyPlantsScreen from "../screens/MyPlantsScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator({
    HomeScreen: HomeScreen,
    CalendarScreen: CalendarScreen,
    CameraScreen: CameraScreen,
    SearchScreen:SearchScreen,
    MyPlantsScreen:MyPlantsScreen,
    Login:LoginScreen,
  }, {
    initialRouteName: 'HomeScreen',
  });  // creates object for Stack Navigator
const RootStack=createAppContainer(Stack);
export {RootStack}
/*const FirstScreenNavigator = () => {
  return (
      <RootStack>
    <Stack.Navigator >    // contains all child component screens within a stack. 
       <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
       <Stack.Screen
        name="NestedHomeScreen"
        component={NestedScreen}
      />
    </Stack.Navigator>
    </RootStack>
  );
}

export {FirstScreenNavigator}; // Stack-Navigator for Screen 1 Tab

const SecondScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="CalendarScreen"
            component={CalendarScreen}
        />
         <Stack.Screen
          name="NestedCalendarScreen"
          component={NestedScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export {SecondScreenNavigator}; // Stack-Navigator for Screen 2 Tab

  const ThirdScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
        />
         <Stack.Screen
          name="NestedCameraScreen"
          component={NestedScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export {ThirdScreenNavigator}; 

  const FourthScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
        />
         <Stack.Screen
          name="NestedSearchScreen"
          component={NestedScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export {FourthScreenNavigator}; 

  const FifthScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="MyPlantsScreen"
            component={MyPlantsScreen}
        />
         <Stack.Screen
          name="NestedMyPlantsScreen"
          component={NestedScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export {FifthScreenNavigator};*/