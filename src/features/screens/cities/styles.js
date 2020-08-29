import {StyleSheet,Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const typeStyles = StyleSheet.create({
   safeView:{
    flex:1,
    backgroundColor:'#132430',
    paddingHorizontal:'5%',
    paddingTop:'10%'
   },
   logoView:{
      paddingVertical:'5%'
   },
   logoTitle:{
    fontFamily:'Magettas-Bold',
    fontSize:30,
    textAlign:'center',
    color:'#fff',
   },
   title:{
      fontFamily:'Muli-SemiBold',
      fontSize:18,
      textAlign:'center',
      color:'#fff'
   },
   subTitle:{
      fontFamily:'Muli-Regular',
      fontSize:14,
      textAlign:'center',
      paddingVertical:'5%',
      color:'#fff'
   },
   btnContainer:{marginTop:'5%'

   },
   btn:{
      backgroundColor:'#2f3a42',
      marginBottom:'5%',
      height:50,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
   },
   btnText:{
      fontFamily:'Muli-Bold',
      fontSize:16,
      color:'#fff',
   },
   icon:{
      height:100,
      width:100,
   },
   iconView:{
      alignItems:'center',
      paddingVertical:'5%'
   }
})

 