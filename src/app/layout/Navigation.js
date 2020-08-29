import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {tabStyles} from './styles';

import LoginScreen from '../../features/screens/auth/Login';
import DiscoverTabScreen from '../../features/screens/discover/DiscoverTabView';
import CuratorScreen from '../../features/screens/curator/Curator';
import TicketScreen from '../../features/screens/ticket/Tickets';
import ProfileScreen from '../../features/screens/user/Profile';
import ChooseCity from '../../features/screens/cities/ChooseCity'
import EventScreen from '../../features/screens/events/EventScreen';
import {executeVibrate} from '../constants/helper';
import HeaderDemo from '../../features/screens/discover/HeaderDemo';
import EditProfile from '../../features/screens/discover/EditProfile';
import OtherProfile from '../../features/screens/discover/OtherProfile';

/*const ChooseStack = createStackNavigator(
  {
    ChooseCity: ChooseCity,
  },
  {
    initialRouteName: 'ChooseCity',
    headerMode: 'none',
  },
);
 const UserNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverTabScreen,
      // navigationOptions: {
      //   tabBarIcon({tintColor, focused}) {
      //     return (
      //       <Image
      //         source={
      //           focused
      //             ? require('../../features/assets/homeActive.png')
      //             : require('../../features/assets/home.png')
      //         }
      //         resizeMode="contain"
      //         style={{width: 23, height: 24, marginTop: 5}}
      //       />
      //     );
      //   },
      // },
    },
    Curator: {screen: CuratorScreen },
    Tickets: {screen: TicketScreen },
    Profile: {screen: ProfileScreen },

  },
  {
    
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
       // executeVibrate();
        defaultHandler()
      },
    }),
    tabBarOptions: {
      style:tabStyles.tabOptions, 
      labelStyle: tabStyles.label,
      showLabel: true,
      adaptive :true,
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
    },
  },
);
const OrganizerNavigator = createBottomTabNavigator(
  {
    Discover: {screen: DiscoverTabScreen},
    Curator: {screen: CuratorScreen },
    Tickets: {screen: TicketScreen },
    Profile: {screen: ProfileScreen },
    Events: {screen: EventScreen },
  },
  {
    tabBarOptions: {
      style:tabStyles.tabOptions, 
      labelStyle: tabStyles.label,
      showLabel: true,
      adaptive :true,
      activeTintColor: '#232d3b',
      inactiveTintColor: '#a5a5a5',
    },
  },
);
*/
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Profile :HeaderDemo,
    EditProfile:EditProfile,
    OtherProfile:OtherProfile
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);


// const AppStack = createStackNavigator(
//   {
//     Customer: UserNavigator,
//     Organizer: OrganizerNavigator

//   },
//   {
//     initialRouteName: 'Customer',
//     headerMode: 'none',
//   },
// );

const AppNavigator = createSwitchNavigator(
  {
    App: AuthStack,
    // App: AppStack,
    // ChooseStack : ChooseStack,
    
  },
  {
    initialRouteName: 'App',
  },
);
export default createAppContainer(AppNavigator);
