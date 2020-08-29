import React,{Component} from 'react';
import Modal from 'react-native-modal';
import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import {cityPickerStyles} from '../styles';
import { Icon } from 'react-native-elements';

export default class OtherPicker extends Component{
    state={
        other:[{
            title:'Notifications',src:require('../../../features/assets/images/ic_notification.png')},
            {title:'Settings',src:require('../../../features/assets/images/ic_settings.png')},
            {title:'Saved',src:require('../../../features/assets/images/Vector.png')},
            {title:'Contacts',src:require('../../../features/assets/images/share.png')}]

    }
   
    render(){
        const{isModal,handleModal}=this.props;
        return(
            <Modal isVisible={isModal} onBackButtonPress={handleModal}
            animationIn="slideInUp"
            animationInTiming={500}
            animationOut="slideOutDown"
            animationOutTiming={400}
            style={{  margin: 0,
        borderTopEndRadius:10,
        borderTopStartRadius:10,    }}
            onBackdropPress={handleModal}>
              <View style={cityPickerStyles.modalView}>
                  <View style={cityPickerStyles.header}>
                    <View></View>
                    <Text style={cityPickerStyles.heading}></Text>
                    <Icon
                    name='close'
                    type='material'
                    color='#000'
                    size={25}
                    style={{paddingTop:4}}
                    onPress={handleModal}
                    />
                  </View>
                  <ScrollView style={{marginBottom:10}}>
                  {this.state.other.map(res=>{
                      return(
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={res.src}
                        style={{height:18,width:20}} resizeMode="contain"/>
                        <TouchableOpacity style={cityPickerStyles.cityView}  onPress={handleModal}>
                            <Text style={cityPickerStyles.cityName}>{res.title}</Text>
                        </TouchableOpacity>
                        </View>
                      )
                  })}
                  </ScrollView>
              </View>
            </Modal>
        )
    }
}