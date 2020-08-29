import {StyleSheet,Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
   safeView:{
    flex:1,
    backgroundColor:'#fff'
   },
   container:{

   }
})
export const eventScreenStyles = StyleSheet.create({
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:'4%',
        elevation:2,
        backgroundColor:'#fff'
    },
    headerLabel:{
        fontSize:14,
        fontFamily:'Muli-Bold'
    },
    container:{
        flex:1,
        
    },
    activeTabLabel: {
        color:'#E97650',
        textDecorationLine:'underline'
    },
    innerContainer:{width:'100%',justifyContent:'center'},
    InActiveTabLabel: {color: '#232d3b'},
    tabStyle:{backgroundColor: '#ffffff',elevation:0},
    tabLabel:{fontFamily: 'Muli-Bold',fontSize:12},
    InActiveTabLabel: {color: '#232d3b'},
    tabBar:{width:'auto'},
    eventView: {marginTop: '2%'},

 })
 export const eventStyles = StyleSheet.create({
    cardView:{
        marginBottom:'8%'
    },
    flatView:{
        paddingHorizontal:'4%'
    },
    topImage:{
        height:180
    },
    eventTitle:{
        fontFamily:'Muli-Bold',
        fontSize:14
    },
    date:{ 
        fontFamily:'Muli-Regular',
        fontSize:12
    },
    rowView:{flexDirection:'row',justifyContent:'space-between'},
    organiserName:{ fontFamily:'Muli-SemiBold',
    fontSize:12},
  
   
 })