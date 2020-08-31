import React from 'react';
import { View,Text,Image,Dimensions} from 'react-native';
import {myProfileStyles as styles} from './styles';
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

class UpcomingView extends React.Component {
 
   render() {
       const{upcomingArr}=this.props;
    return (
        <>
            {upcomingArr.map((res,index)=>{
                return(
                    <>
                    <View style={styles.upcomingList}>
                        <View>
                            <Image source={res.img} style={{height:65,width:80}}/>
                            <View style={{height:60,width:80,backgroundColor:'#313137',position:'absolute',opacity:0.1}}>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:10,width:screenWidth-100,paddingTop:5}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text  style={[styles.bio]}>{res.title}</Text>
                            <Text style={[styles.item,styles.date]}>{res.date}</Text>
                            </View>
                            <Text style={[styles.item,{color:'#9997EC',fontSize:15}]}>{res.positions}</Text>
                        </View>
                    </View>
                    {index<upcomingArr.length-1  && <View style={styles.line}></View>}
                    </>
                )
            })}
            </>
          );
  }
}

export default(UpcomingView);
