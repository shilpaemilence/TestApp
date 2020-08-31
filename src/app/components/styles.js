import {StyleSheet,Dimensions,Platform} from 'react-native';
const {width} = Dimensions.get('window');

export const cityPickerStyles = StyleSheet.create({
    modalView:{ 
      backgroundColor:'#1B1B1B',
      elevation:7,
      borderRadius:2,
     // borderWidth:Platform.OS==='ios'?1:1,borderColor:'rgba(255, 255, 255, 0.3);',
      flex:1,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      position:'absolute',
      width:'100%',
      bottom:0,
      paddingHorizontal:10,
      paddingBottom:20
    },
    cityView:{
        paddingVertical:'3.5%',width:'85%',
        // borderBottomWidth:1,
        // borderBottomColor:'rgba(255, 255, 255, 0.3);',
        paddingHorizontal:10,
        marginLeft:10
        
    },
    line:{ height: 1,backgroundColor:'rgba(255, 255, 255, 0.3)',marginHorizontal:'4.9%'},

    header:{
        justifyContent:'space-between',
        flexDirection:'row',
        height:30
    },
    heading:{
        fontFamily:'Muli-Bold',
        fontSize:16,
        paddingVertical:2
    },
    cityName:{ 
        fontFamily:'Muli-Regular',
        fontSize:17,
        color:'#fff'
    }
})
export const bannerImageStyles = StyleSheet.create({
    mainView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: 'white',
      marginHorizontal: '10%',
      padding: '5%',
    },
    modalViewContainer: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    modalTitle: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
    },
    closeBtn: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 12,
      padding: 5,
    },
    cameraPicker: {
      paddingVertical: 10,
    },
    modalPickerText: {
      fontFamily: 'Montserrat-Medium',
    },
    selectedImage: {
      width: '100%',
      borderRadius: 15,
      height: 135,
    },
    selectedImageView: {
      width: '100%',
      height: 135,
      borderRadius: 15,
    },
    editView: {
      position: 'absolute',
      right: 5,
      bottom: 5,
    },
    editIcon: {
      width: 26,
      height: 26,
    },
    addBtn: {
      borderColor: '#ececec',
      borderWidth: 1,
      width: '100%',
      height: 135,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    },
    addBtnView: {
      borderColor: '#ececec',
      borderWidth: 1,
      padding: 10,
      borderRadius: 30,
    },
    addBtnText: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 15,
      marginTop: 5,
    },
  });
  export const imagePickerWrapperStyles = StyleSheet.create({
    mainView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedImage: {
      width: 99,
      height: 99,
      borderRadius: 100,
    },
    editIcon: {
      width: 26,
      height: 26,
    },
    addIcon: {
      width: 99,
      height: 99,
    },
    editView: {
      position: 'absolute',
      right: 5,
      bottom: 0,
    },
  });
  export const imageViewStyles = StyleSheet.create({
    mainContainer: {
      backgroundColor: 'black',
      width: '100%',
      flex: 1,
      opacity: 0.7,
    },
    image: {
      width: '100%',
      height: '90%',
    },
    topView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginHorizontal: 20,
    },
  });
  export const scannerStyle = StyleSheet.create({
   marker: {borderColor: '#ffffff'},
    camera: {height: '100%'},
  // camera: {height: 150,width:200},
});
export const imageViewStyles1 = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    width: '100%',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '90%',
    marginTop: 10,
  },
  topView: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
});
export const videoViewStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    width: '100%',
    flex: 1,
  },
});