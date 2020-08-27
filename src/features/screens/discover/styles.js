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
      time:{     fontSize:16,
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
       borderColor:'#fff',
       borderWidth:1,
       height:35,
       width:35,
       justifyContent:'center',
       alignItems:'center',
       paddingLeft:5,
       borderRadius:17.5,
      },
      playIcon:{
         height:30,width:20
      },
      shareBtn:{
         height:35,
         width:35,
      },
      rightIconsView:{
         width:'100%',
         flexDirection:'row',
         justifyContent:'space-between',
         paddingVertical:30,
         paddingRight:10
      }
 })
 export const tiktokView=StyleSheet.create({
     cardView:{
        flexDirection:'row'
     },
     eventTitle:{
        color:'#fff',
        fontSize:13,
        fontFamily:'Muli-Bold',
        paddingRight:width/6
     },
     date:{
        color:'#fff',
        fontSize:11,
        fontFamily:'Muli-SemiBold'
     },
     pro:{
        height:40,width:40,borderRadius:20 
     },
     topViewName:{
         justifyContent:'center',
         paddingHorizontal:5
     },
     heading:{
        fontSize:28,
        marginVertical:'5%'
     },
     leftView:{
        paddingLeft:'5%'
     },
     rightView:{
      position:'absolute',
      right:0,
      top:0
     },
     time:{
        fontSize:12,
        color:'#fff',
        fontFamily:'Muli-Regular'
     },
     price:{
        fontSize:32,
        color:'orange',
        fontFamily:'Muli-Bold',
     },
     off:{
        fontSize:9,
        fontFamily:'Muli-SemiBold',
        paddingVertical:'2%'
     },
     offView:{
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        marginLeft:'60%',
        position:'absolute',
        top:7
     },
     rightIcon:{
        height:35,width:35,
        marginBottom:10,
     },
  
     item: {
      width: screenWidth,
      height: screenHeight-140,
      paddingHorizontal:'2%',
      paddingTop:'2%'
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 0 }), // Prevent a random Android rendering issue
      backgroundColor: 'white',
      borderRadius: 8,
     
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
   
    },
    title:{
      fontFamily:'Muli-Regular',
      fontSize:16,
      color:'#fff'
    },
    badgeView:{backgroundColor:'#000',height:17,width:17,borderRadius:8.5,
   justifyContent:'center',alignItems:'center',position:'absolute',marginTop:-5,
   right:-6,zIndex:999},
   badge:{color:'#fff',fontSize:8,fontFamily:'Muli-Regular'}
 })