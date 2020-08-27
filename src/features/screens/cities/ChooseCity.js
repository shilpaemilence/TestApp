import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import {typeStyles} from './styles';
import {IC_LOGO} from '../../../app/constants/constants';

class ChooseCity extends React.Component {

  handleNavigation = screenName=>()=>{
    const{navigation:{navigate}}=this.props;
    navigate(screenName);
  }
  render() {
    return (
      <SafeAreaView style={typeStyles.safeView}>
        <ScrollView >
        <View style={typeStyles.logoView}>
            <Text style={typeStyles.logoTitle}>3DaysToGo</Text>
        </View>
        <Text style={typeStyles.title}>Find events by city</Text>
        <Text style={typeStyles.subTitle}>3daystogo shows you events by city. Choose ypur city to get started.</Text>
        <View style={typeStyles.iconView}>
            <Image source={IC_LOGO} style={typeStyles.icon}/>
        </View>
        <View style={typeStyles.btnContainer}>
            <TouchableOpacity style={typeStyles.btn} onPress={this.handleNavigation('Customer')}>
                <Text style={typeStyles.btnText}>Los Vegas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={typeStyles.btn} onPress={this.handleNavigation('Customer')}>
                <Text style={typeStyles.btnText}>San Franciso</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </SafeAreaView>

    );
  }
}

export default(ChooseCity);
