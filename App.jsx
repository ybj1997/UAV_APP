import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './component/Home'
import VideoScreen from './component/Video'
import TrackerScreen from './component/DroneTracker'

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
            headerTitleAlign: 'center'
          }} />
        <Stack.Screen
          name="Tracker"
          component={TrackerScreen}
          options={{
            title: '详情',
            headerTitleAlign: 'center'
          }} />
          <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{
            title: '实时成像',
            headerTitleAlign: 'center'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
