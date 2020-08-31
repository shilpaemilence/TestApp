import React from 'react';
import { View,Text,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {homeStyles} from '../user/styles';
import NavigationService from '../../../app/layout/NavigationService'
import {BACK} from '../../../app/constants/constants'

export const Header = (props) => {
    return (
     <View style={{ flexDirection:'row',
        justifyContent:'space-between',
        padding:'4%',
        elevation:2,
        alignItems:'center'
     }}>
            <TouchableOpacity onPress={()=>NavigationService.goBack()}>
                <Image source={BACK} resizeMode="contain"
                    style={{height:18,width:20,marginLeft:5}} />
            </TouchableOpacity>
            <View style={{backgroundColor:'#222223',borderRadius:5,paddingVertical:5}}>
    <Text style={[homeStyles.headerLabel,{marginRight:10,fontFamily:'Muli-Regular',fontSize:13}]}>{props.title}</Text>
            </View>
            <Text></Text>
            </View>
          );
  
}

