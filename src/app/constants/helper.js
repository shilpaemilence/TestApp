import { Platform,Dimensions,StatusBar,NativeModules,Vibration } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get('window');
export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;


export const StatusBarHeight = Platform.OS==='android'?StatusBar.currentHeight:(isIPhoneX()?44:20);

//single vibration short vibration
export const executeVibrate=()=>{
    Vibration.vibrate(40)
}


export const generateVibration = (type ) =>()=> {
    const { ReactNativeHaptic } = NativeModules;
    // checking if ios is greater than or equal to 10.0 (to utilize haptic engine)
    if (Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 10) {
        ReactNativeHaptic.generate(type)
    } else {
        // if platform is android, comparable vibration patterns based on type
        if (Platform.OS === "android") {
            switch (type) {
                case "selection":
                    Vibration.vibrate(22)
                    break;
                case "impactLight":
                    Vibration.vibrate(30)
                    break;
                case "impactMedium":
                    Vibration.vibrate(40)
                    break;
                case "impactHeavy":
                    Vibration.vibrate(50)
                    break;
                case "notification":
                    Vibration.vibrate([10, 40, 60, 30])
                    break;
                case "notificationSuccess":
                    Vibration.vibrate([10, 75, 100, 40])
                    break;
                case "notificationWarning":
                    Vibration.vibrate([10, 30, 80, 40, 80, 50])
                    break;
                case "notificationError":
                    Vibration.vibrate([10, 40, 80, 30, 80, 50])
                    break;
                default:
                    Vibration.vibrate(22)
                    break;
            }
            // vibration fallback for ios lower than 10.0
        } else if (Platform.OS === "ios" && parseInt(Platform.Version, 10) < 10) {
            Vibration.vibrate()
        }
    }
}
