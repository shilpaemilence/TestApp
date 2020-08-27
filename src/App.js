import React, {Component} from 'react';
import NavigationService from './app/layout/NavigationService';
import AppNavigator from './app/layout/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar,Platform,View} from 'react-native';
import {StatusBarHeight } from './app/constants/helper';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[{height:StatusBarHeight}, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  
  render() {
    return (
      <View style={{flex:1}}>
      {Platform.OS==='ios' &&
        <MyStatusBar backgroundColor="#132430" barStyle="light-content" />
      }
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
      </View>
    );
  }
}

export default App;
