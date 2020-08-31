import {StyleSheet,Dimensions} from 'react-native';
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
   safeView:{
    flex:1,
    backgroundColor:'#000'
   },
   container:{

   }
})

export const projectStyles = StyleSheet.create({
  
   container:{
      flex:1,
      paddingVertical:'5%',
   },
   imgView:{
      flexDirection:'row',
      justifyContent:'flex-end',
      paddingHorizontal:'5%'
   },
   overlay:{
      position:'absolute',
      backgroundColor:'#fff',
      height:238,
      width:265,
      opacity:0.2,
      right:'5%',
      borderRadius:5
   },
   hire:{
      color:'#fff',
      fontSize:13
   },
   hireView:{ position:'absolute',
   right:'10%',
   top:'5%'  , 
   zIndex:999,height:28,width:62,justifyContent:'center',alignItems:'center',borderRadius:5,
   backgroundColor:' rgba(69, 66, 173, 0.7);'
},
descView:{
  
  marginTop:-35,
  marginHorizontal:'7%'
  
},
title:{
   fontSize:40,color:'#fff',
   fontFamily:'GT America Bold',textTransform:'uppercase',
   width:screenWidth-155,
   
},
desc:{
   fontSize:14,color:'#fff',
   width:screenWidth-155,
   fontFamily:'Muli-Regular',
   marginBottom:'17%',
},
line:{height: 1,backgroundColor:'solid rgba(255, 255, 255, 0.3)'},
imgSetting:{marginLeft:-7},
userText:{  fontSize:13,color:'#fff',paddingLeft:'4%'
},
heading:{
   fontSize:14,color:'#fff',
},
tabViews:{
   padding:'7%'
},
dateTitle:{fontSize:13,color:'#838383',},
date:{fontSize:13,color:'#fff',},
apply:{fontSize:14,color:'#fff',paddingTop:5},
btnContainer:{flexDirection:'row',backgroundColor:'#2B2A39'},
activebtnContainer:{flexDirection:'row',backgroundColor:'#4441D3'},

btnPadding:{

},
btn:{
   width:screenWidth/2,
   justifyContent:'center',
   paddingVertical:'5%',
   paddingHorizontal:'7%',
},
activeBtn:{ alignItems:'center',},
positionView:{
   flexDirection:'row',
   paddingVertical:'5%',
   width:'100%'
},
leftText:{
   fontSize:15,color:'#fff',
   paddingLeft:8
},
rightText:{
   fontSize:13,color:'#fff'
},
square:{
   width:27,height:23,backgroundColor:'#3E3E3E',justifyContent:'center',alignItems:'center'
},
rightSubView:{
   flexDirection:'row',
   justifyContent:'space-between',
   paddingRight:20,
   paddingVertical:5,
   
},
rightView:{
  // width:screenWidth/2,
  width:'55%',
   paddingTop:'8%'
},
posLine:{},
opn:{ 
   //width:screenWidth/2,
   width:'45%',
   paddingLeft:'7%'},
   listText:{
      color:'#fff',
      paddingHorizontal:10,
   },
   overView:{
      backgroundColor:'#2E2E2E',
      height:24,
      marginRight:5,
      borderRadius:2,justifyContent:'center',alignItems:'center'
   },
   skills:{
      borderWidth:1,
      borderColor:'#fff',
      height:40,
      paddingHorizontal:15,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:20,
      marginRight:7
  },
  input:{
     borderColor:'rgba(255, 255, 255, 0.24)',
     borderWidth:1,
     borderRadius:7,
     width:'90%',
     color:'#fff',
     marginHorizontal:10,
     paddingHorizontal:5
  }
})