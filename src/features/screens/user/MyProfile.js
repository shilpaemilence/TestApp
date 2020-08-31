import React, {Component} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground ,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import {homeStyles,headerStyles} from './styles';
import BottomView from './BottomView';
import VideoViewModal from '../../../app/components/VideoViewModal';
import ProfilePicker from '../../../app/components/modals/ProfilePicker';
import {BACK,DOTS,MSG,PLAY,SAVE} from '../../../app/constants/constants'

const HEADER_MAX_HEIGHT = 500;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

export default class MyProfile extends Component {
   state = {
      scrollY: new Animated.Value(0),
       showViewModal:false,
       isModal:false,
    };


    handleModal=()=>{
      this.setState({showViewModal:!this.state.showViewModal})
    }
    handleToggle =()=>{
      this.setState({isModal:!this.state.isModal})
      

    }
  headerView = (headerHeight)=>{
    return(
      <Animated.View style={[headerStyles.header, {height: headerHeight}]}>
      <View style={homeStyles.renderView}>
      <View style={homeStyles.rightIconsView}>
          <View></View><View></View>
          <TouchableOpacity onPress={this.handleModal}>
            <Image source={PLAY} resizeMode="contain" style={homeStyles.playIcon} />
          </TouchableOpacity>
        </View>
      <Text style={[headerStyles.heading,{paddingLeft:'5%',fontWeight:'bold'}]}>WILLIAM {"\n"}ERWIN</Text>
        <Text style={[homeStyles.time,{paddingLeft:'5%',fontWeight:'bold',letterSpacing:3}]}>Colorist</Text>
        <View style={homeStyles.rightIconsView}>
          <View></View><View></View>
          <TouchableOpacity >
          <Image source={SAVE} resizeMode="contain" style={homeStyles.shareBtn} />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground 
        source={require('../../assets/images/demos.png')}
        style={{ flex: 1,width:screenWidth ,height: null}}> 
      <View style={headerStyles.displayHeader}>
          <Image source={BACK} resizeMode="contain" style={{height:18,width:20}} />
          <Text style={homeStyles.headerLabel}>My Profile</Text>
          <View style={headerStyles.rightView}>
            <TouchableOpacity onPress={this.handleToggle} >
            <Image source={require('../../assets/images/red.png')} resizeMode="contain"
            style={{height:10,marginLeft:15}} />
          <Image source={DOTS} resizeMode="contain"
          style={{height:20,width:25}} />
          </TouchableOpacity>
          <Image source={MSG} resizeMode="contain"
          style={{height:20,width:18,marginLeft:14}} />
          </View>
      </View>
      </ImageBackground>  
      
      </Animated.View>
 
    )
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
      });
      const{isModal}=this.state
    return (
      <View style={headerStyles.fill}>
        {this.state.showViewModal &&
        <VideoViewModal showViewModal={this.state.showViewModal} toggleViewModal={this.handleModal}/>
         }
         {this.state.isModal &&
         <ProfilePicker isModal={this.state.isModal} handleModal={this.handleToggle}/>
         }
        <ScrollView  scrollEventThrottle={16}  
          contentContainerStyle={{paddingBottom:20}}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}  >
        <BottomView/>
        </ScrollView>
        {this.headerView(headerHeight)}
      </View>
    );
  }
}

