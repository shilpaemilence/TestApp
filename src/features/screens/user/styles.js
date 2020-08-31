import {StyleSheet,Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
   safeView:{
    flex:1,
    backgroundColor:'#000'
   },
   container:{

   }
})
export const homeStyles = StyleSheet.create({
   inputView:{flexDirection:'row',alignItems:'center',width:'100%'},
   label:{fontSize:15,color:'#B6B6B6',fontFamily:'Muli-Regular',width:'40%'},
   input:{fontSize:15,color:'#fff',width:'60%',
   fontFamily:'Muli-Regular',borderBottomColor:'rgba(196, 196, 196, 0.24)',borderBottomWidth:1},
   container:{flex:1,backgroundColor:'#000'},
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'4%',
        elevation:2,
        borderBottomColor:'#2f3a42',
        borderBottomWidth:1
    },
    headerLabel:{
        fontSize:16,
        fontFamily:'Muli-Bold',
        color:'#fff',
        marginStart:screenWidth/3 -90
    },
   
    activeTabLabel: {
        color:'#fff',
    },
    innerContainer:{width:'100%',justifyContent:'center',backgroundColor:'#000',
    borderBottomColor:'#fff',borderBottomWidth:1,
    marginBottom:0.5},
    tabStyle:{backgroundColor: 'rgba(255, 255, 255, 0.3)',elevation:0},
    tabLabel:{fontFamily: 'Muli-Bold',fontSize:12},
    InActiveTabLabel: {color: 'gray'},
    eventView: {marginTop: '2%'},
      time:{     
         fontSize:16,
         color:'#fff',
         fontFamily:'Muli-SemiBold',
         textTransform:'uppercase'
      },
      renderView:{
         position:'absolute',
         bottom:5,zIndex:999,
         width:'100%',
         
      },
      playBtn:{
      
       height:35,
       width:35,
       justifyContent:'center',
       alignItems:'center',
       paddingLeft:5,
       borderRadius:17.5,
      },
      playIcon:{
         height:34,width:27
      },
      shareBtn:{
         height:25,
         width:18,
      },
      rightIconsView:{
         width:'100%',
         flexDirection:'row',
         justifyContent:'space-between',
         paddingVertical:30,
         paddingRight:10
      }
 })

 export const headerStyles = StyleSheet.create({
   fill: {
     flex: 1,
     backgroundColor:'#313137',
   },
   row: {
     height: 40,
     margin: 16,
     backgroundColor: '#D3D3D3',
     borderRadius:5,
     alignItems: 'center',
     justifyContent: 'center',
   },
   header: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     backgroundColor: '#000',
     overflow: 'hidden',
   },
   displayHeader:{alignItems:'center',paddingHorizontal:8,
   paddingTop:'6%',flexDirection:'row',justifyContent:'space-between'},
   rightView:{flexDirection:'row',alignItems:'center',paddingRight:5},
   heading:{fontSize:40,color:'#fff',fontFamily:'Muli-SemiBold',paddingBottom:5,letterSpacing: 4}
 });
 export const myProfileStyles=StyleSheet.create({
    flat:{paddingRight:'25%'},
    date:{textAlign:'right',color:' rgba(255, 255, 255, 0.6)'},
    line:{ marginHorizontal:'5%',marginVertical:10,height: 1,backgroundColor:'rgba(132, 132, 132, 0.3)'},
   editBtn:{
       borderColor:'#fff',
       borderWidth:1,
       borderRadius:5,
       width:100,
       height:30,
       justifyContent:'center',
       alignItems:'center'
   },
   editText:{
       fontSize:14,
       fontFamily:'Muli-Regular',
       color:'#fff'
   },
   down:{
       height:28,width:15
   },
   btn:{
        marginRight:-5
   },
   bio:{
       fontSize:16,
       fontFamily:'Muli-Regular',
       color:'#fff'   
   },
   item:{
       fontSize:14,
       fontFamily:'Muli-Regular',
       color:'#fff',
       
   },
   skills:{
       borderWidth:1,
       borderColor:'#fff',
       height:30,
       marginLeft:20,
       paddingHorizontal:10,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:15
   },
   skills1:{
       height:30,
       marginLeft:6,
       paddingLeft:10,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:15,
       paddingRight:20,
   },
   skillsView:{flexDirection:'row',height:55,borderTopWidth:1,
   borderBottomWidth:1,borderColor:'rgba(255, 255, 255, 0.3)',
alignItems:'center'},
upcomingList:{
   flexDirection:'row',
   width:'100%',
   paddingHorizontal:'5%',
   
}
})
 
export const otherStyles=StyleSheet.create({
    flat:{paddingRight:'25%'},

    editBtn:{
       backgroundColor:'rgba(57, 74, 113, 0.7)',
        borderRadius:6,
        paddingHorizontal:12,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    editText:{
        fontSize:14,
        fontFamily:'Muli-Regular',
        color:'#fff'
    },
    down:{
        height:28,width:15
    },
    btn:{
         marginRight:-5
    },
    bio:{
        fontSize:16,
        fontFamily:'Muli-Regular',
        color:'#fff'   
    },
    item:{
        fontSize:14,
        fontFamily:'Muli-Regular',
        color:'#fff',
        
    },
    skills:{
        borderWidth:1,
        borderColor:'#fff',
        height:30,
        marginLeft:20,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    skills1:{
        
        height:30,
        marginLeft:20,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    skillsView:{flexDirection:'row',height:55,borderTopWidth:1,
    borderBottomWidth:1,borderColor:'rgba(255, 255, 255, 0.3)',
alignItems:'center'},
upcomingList:{
    flexDirection:'row',
    width:'100%',
    paddingHorizontal:'5%',
    
}
})
export const projectModal = StyleSheet.create({
    modalView:{ 
      backgroundColor:'#1B1B1B',
      elevation:7,
      borderRadius:2,
      borderRadius:10,   
      width:'100%',
      paddingHorizontal:10,
      height:180,
      borderColor:'rgba(255, 255, 255, 0.3)',
      borderWidth:1,alignItems:'center'
    },
    cityView:{
        paddingVertical:'3.5%',width:'85%',
        paddingHorizontal:10,
        marginLeft:10
        
    },
    line:{ height: 1,backgroundColor:'rgba(255, 255, 255, 0.3)',marginHorizontal:'4.9%'},
    title:{fontFamily:'Muli-Regular',color:'#fff',fontSize:15,paddingVertical:'10%'},
    btn:{
        backgroundColor:'rgba(255, 255, 255, 0.08)',
        borderWidth:1,
        borderColor:'rgba(255, 255, 255, 0.8)',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        paddingHorizontal:15

    },
    btnText:{color:'#fff',fontSize:14,fontFamily:'Muli-Regular'},
    btnView:{
        flexDirection:'row'
    }

})
