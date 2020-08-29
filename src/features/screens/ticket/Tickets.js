import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import Scanner from '../../../app/components/Scanner';
import {homeStyles,commonStyles} from '../discover/styles';


class TicketScreen extends React.Component {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
         <View style={homeStyles.headerView}>
            <Text style={homeStyles.headerLabel}><Text style={{color:'orange'}}>3</Text>DaysTOGO</Text>
        </View>
        <Text>Scan your QR code here</Text>
      
        <Scanner onSuccess={this.onSuccess} />

      </SafeAreaView>

    );
  }
}

export default(TicketScreen);
