import AsyncStorage from '@react-native-community/async-storage';
import {showMessage} from 'react-native-flash-message';
import {Alert, BackHandler,Dimensions} from 'react-native';

export const keyExtractor = (item, index) => index.toString();

export const getItem = async itemName => {
  let data = await AsyncStorage.getItem(itemName);
  let parsedData = JSON.parse(data);
  return parsedData;
};

export const setItem = async (itemName, data) => {
  return await AsyncStorage.setItem(itemName, JSON.stringify(data));
};

export const removeItem = async itemName => {
  return await AsyncStorage.removeItem(itemName);
};
export const convertToFormData = payload => {
  let formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });
  console.log('Converted formData', formData);
  return formData;
};
export const makeUrl = endpoint =>
  `https://webdevelopmentsolution.net/datetify/api/${endpoint}`;
export const isObjEmpty = obj => {
  if (Object.entries(obj).length === 0 && obj.constructor === Object) {
    return true;
  } else {
    return false;
  }
};
export const alertToast = () => {
  Alert.alert(
    'Datify',
    'Please login to app for booking appointment',
    [
      {
        text: 'Not now',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Signup', onPress: () => navigate('Auth')},
      {
        text: 'Login',
        onPress: () => navigate('Auth'),
      },
    ],
    {cancelable: false},
  );
};

export const errorToast = (description, msg, position) => {
  showMessage({
    message: msg ? msg : 'Error',
    description: description ? description : 'Oops! something went wrong',
    type: 'danger',
    position: position ? position : 'bottom',
    icon: 'auto',
  });
};

export const successToast = (description, msg, position) => {
  showMessage({
    message: msg ? msg : 'Success',
    description: description ? description : '',
    type: 'success',
    position: position ? position : 'bottom',
    icon: 'auto',
  });
};
export const notificationToast = (msg, description, func, data) => {
  showMessage({
    message: msg,
    description: description,
    type: 'default',
    position: 'top',
    style: {
      margin: '5%',
      borderRadius: 10,
      elevation: 10,
      backgroundColor: 'white',
    },
    titleStyle: {
      fontFamily: 'Muli-Bold',
      color: '#000000',
    },
    textStyle: {
      fontFamily: 'Muli-Medium',
      color: '#000000',
    },
    onPress: func ? () => func(data) : () => {},
  });
};
export const handleAlert = () => {
  Alert.alert(
    'Exit App',
    'Are you sure you want to exit?',
    [
      {
        text: 'Yes',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};

export const getScreenOrientation =()=>{
    
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;
      if(deviceWidth>deviceHeight){
          return 'landscape'
      }else{
          return 'portrait'
      }
  }
