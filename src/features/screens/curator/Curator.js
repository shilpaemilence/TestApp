import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {homeStyles,commonStyles} from '../discover/styles';
import CalendarWrapper from '../../../app/components/modals/CalendarWrapper';

class CuratorScreen extends React.Component {

 
  render() {
    return (
      <SafeAreaView style={commonStyles.safeView}>
        <View style={homeStyles.headerView}>
            <Text style={homeStyles.headerLabel}><Text style={{color:'orange'}}>3</Text>DaysTOGO</Text>
        </View>
        
        <ScrollView style={homeStyles.container}>
      
         <CalendarWrapper/>
        </ScrollView>

      </SafeAreaView>

    );
  }
}
export default(CuratorScreen);
