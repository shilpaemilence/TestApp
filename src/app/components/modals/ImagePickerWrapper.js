import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {imagePickerWrapperStyles, bannerImageStyles} from '../styles';
import FastImage from 'react-native-fast-image';
import ImageViewModal from './ImageViewModal';
import {IC_GALLERY,IC_PROFILE} from '../../constants/constants';

class ImagePickerWrapper extends Component {
  state = {
    isModalVisible: false,
    selectedImage: null,
    showViewModal: false,
  };
  componentDidMount() {
    const {initialImage} = this.props;
    if (initialImage) {
      this.setState({
        selectedImage: initialImage,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.initialImage !== this.props.initialImage &&
      this.state.selectedImage === null
    ) {
      this.setState({
        selectedImage: this.props.initialImage,
      });
    }
  }
  openImagePicker = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
      multiple: false,
    }).then(image => {
      console.log('PICKER OUTPUT', image);
      this.setSingleImage(image);
    });
  };
  openCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('CAMERA OUTPUT', image);
      this.setSingleImage(image);
    });
  };
  toggleModal = () => {
    const {editable} = this.props;
    if (editable) {
      this.setState({
        isModalVisible: !this.state.isModalVisible,
      });
    }
  };
  toggleViewModal = () => {
    this.setState({
      showViewModal: !this.state.showViewModal,
    });
  };

  setSingleImage = ({mime, path}) => {
    const singleImgData = {
      name: `datify.${mime ? mime.slice(6) : 'jpg'}`,
      type: mime ? mime : 'jpg',
      uri: path,
    };
    this.props.getSelectedImage(singleImgData);
    this.setState({selectedImage: singleImgData});
    this.toggleModal();
    console.log('SINGLE IMG FUNC OUTPUT', singleImgData);
  };

  render() {
    const {isModalVisible, selectedImage, showViewModal} = this.state;
    return (
      <View style={imagePickerWrapperStyles.mainView}>
        <Modal
          isVisible={isModalVisible}
          style={{margin: 0}}
          animationIn="zoomIn"
          animationOut="zoomOut">
          <View style={bannerImageStyles.modalView}>
            <View style={bannerImageStyles.modalViewContainer}>
              <Text style={bannerImageStyles.modalTitle}>Select Avatar</Text>
              <Text
                style={bannerImageStyles.closeBtn}
                onPress={this.toggleModal}>
                Close
              </Text>
            </View>
            <TouchableOpacity
              onPress={this.openCamera}
              style={bannerImageStyles.cameraPicker}>
              <Text style={bannerImageStyles.modalPickerText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openImagePicker}>
              <Text style={bannerImageStyles.modalPickerText}>
                Choose From Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <ImageViewModal
          showViewModal={showViewModal}
          selectedImage={selectedImage}
          toggleViewModal={this.toggleViewModal}
        />
        {selectedImage !== null ? (
          <View>
            <TouchableOpacity onPress={this.toggleViewModal}>
              <FastImage
                source={{
                  uri: selectedImage.uri,
                  priority: FastImage.priority.high,
                }}
                style={imagePickerWrapperStyles.selectedImage}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={imagePickerWrapperStyles.editView}
              onPress={this.toggleModal}>
              <FastImage
                source={IC_GALLERY}
                style={imagePickerWrapperStyles.editIcon}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={this.toggleModal}>
            <Image
              source={IC_PROFILE}
              style={imagePickerWrapperStyles.addIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default ImagePickerWrapper;
