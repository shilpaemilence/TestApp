import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../../features/screens/auth/Login';

import MyProfile from '../../features/screens/user/MyProfile';
import EditProfile from '../../features/screens/user/EditProfile';
import OtherProfile from '../../features/screens/user/OtherProfile';
import {ProjectView} from '../../features/screens/project/ProjectView';
import {Complete} from '../../features/screens/project/Complete';

// const ProjectStack = createStackNavigator(
//   {
    
//   },
//   {
//     initialRouteName: '',
//     headerMode: 'none',
//   },
// );

const AppStack = createStackNavigator(
  {
    Login: LoginScreen,
    MyProfile :MyProfile,
    EditProfile:EditProfile,
    OtherProfile:OtherProfile,
    ProjectView:ProjectView,
    Complete:Complete
  },
  {
    initialRouteName: 'MyProfile',
    headerMode: 'none',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
    // Project:ProjectStack
   
    
  },
  {
    initialRouteName: 'App',
  },
);
export default createAppContainer(AppNavigator);
