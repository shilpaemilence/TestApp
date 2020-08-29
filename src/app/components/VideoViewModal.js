import React, {Component} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView,Image} from 'react-native';
import Modal from 'react-native-modal';
import {videoViewStyles,  imageViewStyles1} from './styles';
import VideoPlayer from 'react-native-video-controls';
import {IC_BACK_WHITE} from '../constants/constants';

class VideoViewModal extends Component {
  state = {};
  render() {
    const {showViewModal, selectedImage, toggleViewModal} = this.props;
    return (
      <Modal
        isVisible={showViewModal}
        style={{margin: 0}}
        animationIn="zoomIn"
        animationOut="zoomOut"
        onBackButtonPress={toggleViewModal}>
        <SafeAreaView style={{flex: 1}}>
          <View style={videoViewStyles.mainContainer}>
            <View style={imageViewStyles1.topView}>
              <View />
              <TouchableOpacity onPress={toggleViewModal} style={{width:50}}>
                <Image source={IC_BACK_WHITE} style={{height:15,width:20}} resizeMode="contain"/>
              </TouchableOpacity>
            </View>

              <View style={{flex: 1, width: '100%', marginVertical: 30}}>
                <VideoPlayer
                source={require('../../features/assets/oceans.mp4')}
                  // source={{uri: selectedImage.uri}}
                  //  navigator={ this.props.navigator }
                  disableBack={true}
                  disableFullscreen={true}
                />
              </View>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

export default VideoViewModal;
