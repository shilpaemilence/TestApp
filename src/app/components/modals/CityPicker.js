import React,{Component} from 'react';
import Modal from 'react-native-modal';
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';
import {cityPickerStyles} from '../styles';
import { Icon } from 'react-native-elements';
import NavigationService from '../../layout/NavigationService'

export default class CityPicker extends Component{
    state={
        cities:['Add to Contacts','Share','Copy Link','Other User Profile'],
        other:['Notifications','Settings','Saved','Contacts']

    }
    handleBack=()=>{
        this.props.handleModal()
        NavigationService.navigate('OtherProfile');
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
                  {this.state.cities.map(res=>{
                      return(
                        <TouchableOpacity style={cityPickerStyles.cityView}  onPress={res=='Other User Profile'?
                       this.handleBack:handleModal}>
                            <Text style={cityPickerStyles.cityName}>{res}</Text>
                        </TouchableOpacity>
                      )
                  })}
                  </ScrollView>
              </View>
            </Modal>
        )
    }
}