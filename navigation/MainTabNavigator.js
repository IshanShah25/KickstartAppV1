import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import VideosScreen from '../screens/VideosScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CoursesScreen from '../screens/CoursesScreen';
import AboutScreen from '../screens/AboutScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
//     />
//   ),
// };

const VideosStack = createStackNavigator({
  Videos: VideosScreen,
});

// VideosStack.navigationOptions = {
//   tabBarLabel: 'Videos',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'logo-youtube' : 'logo-youtube'}
//     />
//   ),
// };

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen,
});

// CoursesStack.navigationOptions = {
//   tabBarLabel: 'Courses',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-code' : 'md-code'}
//     />
//   ),
// };

const AboutStack = createStackNavigator({
  About: AboutScreen,
});

// AboutStack.navigationOptions = {
//   tabBarLabel: 'About Us',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
//     />
//   ),
// };



const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

// export default createBottomTabNavigator({
//   HomeStack,
//   VideosStack,
//   CoursesStack,
//   AboutStack,
//   SettingsStack,
// });


// new navigator comment out if it doesnt work
export default createMaterialBottomTabNavigator({
  HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => {
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
      },
      tabBarColor: 'tomato',
      shifting: true
    }
  },
  VideosStack,
  CoursesStack,
  AboutStack,
  SettingsStack,
})