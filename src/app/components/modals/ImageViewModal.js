import React, {Component} from 'react';
import {View, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
import {imageViewStyles} from '../styles';
import {IC_BACK_WHITE} from '../../constants/constants';
class ImageViewModal extends Component {
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
          <View style={imageViewStyles.mainContainer}>
            <View style={imageViewStyles.topView}>
              <TouchableOpacity onPress={toggleViewModal}>
                {/* <Icon name="close" type="material" color="white" size={20} /> */}
                <Image
                  source={IC_BACK_WHITE}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            {selectedImage && selectedImage.uri && (
              <View style={{paddingHorizontal: '5%'}}>
                <FastImage
                  source={{
                    uri: selectedImage.uri,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                  style={imageViewStyles.image}
                />
              </View>
            )}
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

export default ImageViewModal;
