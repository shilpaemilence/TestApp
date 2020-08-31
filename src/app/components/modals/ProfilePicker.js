import React,{Component} from 'react';
import Modal from 'react-native-modal';
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';
import {cityPickerStyles} from '../styles';
import { Icon } from 'react-native-elements';
import NavigationService from '../../layout/NavigationService'

export default class ProfilePicker extends Component{
    state={
        cities:['Add to Contacts','Share','Copy Link','Other User Profile','Project Views','Complete Project Views'],
    }
    handleNavigation=screen=>()=>{
        this.props.handleModal();
        NavigationService.navigate(screen);
    }
    render(){
        const{isModal,handleModal}=this.props;
        return(
            <Modal isVisible={isModal} onBackButtonPress={handleModal}
            animationIn="slideInUp"
            animationInTiming={500}
            animationOut="slideOutDown"
            animationOutTiming={400}
            style={{  margin: 0, borderTopEndRadius:10,borderTopStartRadius:10}}
            onBackdropPress={handleModal}>
              <View style={cityPickerStyles.modalView}>
                  <View style={cityPickerStyles.header}>
                    <View></View>
                    <Text style={cityPickerStyles.heading}></Text>
                    <Icon
                    name='close'
                    type='material'
                    color='#fff'
                    size={25}
                    style={{paddingTop:4}}
                    onPress={handleModal}
                    />
                  </View>
                  <ScrollView style={{marginBottom:10}}>
                  {this.state.cities.map(res=>{
                      return(
                          <>
                        <TouchableOpacity style={cityPickerStyles.cityView}  onPress={
                            res=='Other User Profile'?this.handleNavigation('OtherProfile'):
                            res=='Project Views'?
                            this.handleNavigation('ProjectView'):res=='Complete Project Views'?this.handleNavigation('Complete'):handleModal}>
                                <Text style={cityPickerStyles.cityName}>{res}</Text>
                            </TouchableOpacity>
                            <View style={cityPickerStyles.line}></View>
                        </>
                      )
                  })}
                  </ScrollView>
              </View>
            </Modal>
        )
    }
}