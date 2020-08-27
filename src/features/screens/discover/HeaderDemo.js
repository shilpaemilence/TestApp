import React, {Component} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground ,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {homeStyles} from './styles';
import BottomView from './BottomView';
import VideoViewModal from '../../../app/components/VideoViewModal';
import CityPicker from '../../../app/components/modals/CityPicker';
const HEADER_MAX_HEIGHT = 400;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default class HeaderDemo extends Component {
   state = {
        scrollY: new Animated.Value(0),
        data : [{title:'1'},{title:'2'},{title:'3'},{title:'4'},{title:'5'},{title:'6'},{title:'7'},
        {title:'8'},{title:'9'},{title:'10'},{title:'11'},{title:'12'},{title:'13'},{title:'14'},
       ],
       showViewModal:false,
       isModal:false
    };
    handleModal=()=>{
      this.setState({showViewModal:!this.state.showViewModal})
    }
    handleToggle =()=>{
      this.setState({isModal:!this.state.isModal})

    }
  

  render() {
    const headerHeight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
      });
    return (
      <View style={styles.fill}>
        {this.state.showViewModal &&
        <VideoViewModal showViewModal={this.state.showViewModal} toggleViewModal={this.handleModal}/>
      }
         {this.state.isModal &&
        <CityPicker isModal={this.state.isModal} handleModal={this.handleToggle}/>
      }
        <ScrollView  scrollEventThrottle={16}  
        contentContainerStyle={{paddingBottom:20}}
        onScroll={Animated.event(
           [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
        )}  >
       
        <BottomView/>
        </ScrollView>
    
    <Animated.View style={[styles.header, {height: headerHeight}]}>
        <View style={homeStyles.renderView}>
        <View style={homeStyles.rightIconsView}>
            <View></View><View></View>
            <TouchableOpacity style={homeStyles.playBtn} onPress={this.handleModal}>
            <Image source={require('../../assets/images/play.png')} resizeMode="contain"
              style={homeStyles.playIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>Willian Erwin</Text>
          <Text style={homeStyles.time}>Colorist</Text>
          <View style={homeStyles.rightIconsView}>
            <View></View><View></View>
            <TouchableOpacity style={homeStyles.shareBtn}>
            <Image source={require('../../assets/images/Vector.png')} resizeMode="contain"
              style={homeStyles.playIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground 
          source={require('../../assets/images/Image.png')}
          style={{ flex: 1,
            width: null,
            height: null,
            opacity:2,
            }}
        >
         
        <View style={styles.displayHeader}>
            <Image source={null} resizeMode="contain"
            style={{height:15,width:20,marginLeft:10}} />
            <Text style={homeStyles.headerLabel}>My Profile</Text>
            <View style={styles.rightView}>
              <TouchableOpacity onPress={this.handleToggle}>
            <Image source={require('../../assets/images/dots.png')} resizeMode="contain"
            style={{height:25,width:20}} />
            </TouchableOpacity>
            <Image source={require('../../assets/images/msg.png')} resizeMode="contain"
            style={{height:20,width:20,marginLeft:10}} />
            </View>
        </View>
        
      
        </ImageBackground>  
        
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    backgroundColor:'#313137',
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  displayHeader:{alignItems:'center',
  paddingTop:'5%',flexDirection:'row',justifyContent:'space-between'},
  rightView:{flexDirection:'row',alignItems:'center',paddingRight:5},
  heading:{fontSize:25,color:'#fff',fontFamily:'Muli-SemiBold'}
});
