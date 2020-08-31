import React from 'react';
import { View,Text,Image,Dimensions} from 'react-native';
import {myProfileStyles as styles} from './styles';
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

class WorkView extends React.Component {
 
   render() {
       const{propData}=this.props;
    return (
        
        <View style={{paddingRight:10}}>
        <Image source={propData.img}/>
        <View style={{paddingTop:10}}>
         <Text style={styles.bio}>{propData.title}</Text>

         <Text style={styles.item}>{propData.name}</Text>
        </View>
    </View>
          );
  }
}

export default(WorkView);
