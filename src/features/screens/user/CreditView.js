import React from 'react';
import { View,Text,Image,Dimensions} from 'react-native';
import {myProfileStyles as styles} from './styles';
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

class CreditView extends React.Component {
 
   render() {
       const{propData}=this.props;
    return (
        
        <View style={[styles.upcomingList,{marginBottom:10}]}>
                        <View >
                            <Image source={require('../../assets/images/th3.png')} style={{height:65,width:80}}/>
                            <View style={{height:60,width:80,backgroundColor:'#313137',position:'absolute',opacity:0.1}}>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:10,width:screenWidth-100,paddingTop:5}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text  style={[styles.bio]}>{propData.title}</Text>

                            <Text style={[styles.item,{textAlign:'right',color:' rgba(255, 255, 255, 0.6)'}]}>{propData.date}</Text>
                            </View>
                            <Text style={[styles.item,{fontSize:15}]}>{propData.role}</Text>
                        </View>
                    </View>
     
          );
  }
}

export default(CreditView);
