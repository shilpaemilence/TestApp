import {StyleSheet,Dimensions,Platform} from 'react-native';
const {width} = Dimensions.get('window');

export const tabStyles = StyleSheet.create({
    tabOptions:{
        backgroundColor: '#2f3a42',
        height: 50,
        borderTopColor: '#ffffff',
        elevation: 5,
        justifyContent:'center',
        borderTopColor:'#dedede',
        borderTopWidth:Platform.OS==='ios'?1:0
    },
    label:{
        fontSize: 12,
       // textTransform:'uppercase',
        paddingBottom:15,
        // borderRightWidth:1,
        // borderRightColor:'#000',
        textAlign:'center',
        width:width/4,
        fontFamily:'Muli-Regular',

      }
})