import React,{Component} from 'react';
import Modal from 'react-native-modal';
import {View,Text,TouchableOpacity,ScrollView,Image} from 'react-native';
import {projectModal as styles} from './styles';
import NavigationService from '../../../app/layout/NavigationService'

export default class ProjectModal extends Component{
   
    handleNavigation=(screen)=>()=>{
        NavigationService.navigate('AddProject')
    }
    render(){
        const{isModal,handleModal}=this.props;
        return(
            <Modal isVisible={isModal} onBackButtonPress={handleModal}
           // animationIn="slideInUp"
            animationInTiming={500}
           // animationOut="slideOutDown"
            animationOutTiming={400}
            style={{ borderTopEndRadius:10,
        borderTopStartRadius:10,    }}
            onBackdropPress={handleModal}>
              <View style={styles.modalView}>
                <Text style={styles.title}>Create New Project</Text>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn} onPress={this.handleNavigation}>
                        <Text style={styles.btnText}>Completed</Text>
                    </TouchableOpacity>
                    <View style={{width:20}}></View>
                    <TouchableOpacity style={styles.btn} onPress={this.handleNavigation}>
                        <Text style={styles.btnText}>Crewing Up</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </Modal>
        )
    }
}