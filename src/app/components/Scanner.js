import React from 'react';

import {scannerStyle} from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
class Scanner extends React.Component {
  render() {
    const {onSuccess} = this.props;
    return (
      <QRCodeScanner
        showMarker={true}
        flashMode={RNCamera.Constants.FlashMode.auto}
        markerStyle={scannerStyle.marker}
        onRead={onSuccess}
        cameraStyle={scannerStyle.camera}
        checkAndroid6Permissions={true}
        reactivate={true}
        fadeIn={true}
        containerStyle={{alignItems:'center'}}
      />
    );
  }
}

export default Scanner;
