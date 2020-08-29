import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  
} from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import {homeStyles} from '../discover/styles';

const MIN_HEIGHT = 60;
const MAX_HEIGHT = 250;
const tvShowContent={
  title: '3DaystoGo',
  overview: `
  The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street.
    But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel.
    The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it.
    He's saved us from alien menaces and evil from before time began – but just who is he?The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street.
    But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel.
    The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it.
    He's saved us from alien menaces and evil from before time began – but just who is he?The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street.
    But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel.
    The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it.
    He's saved us from alien menaces and evil from before time began – but just who is he?
    The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street.
    But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel.
    The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it.
    He's saved us from alien menaces and evil from before time began – but just who is he?`,
  
};
class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = { showNavTitle: false };
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderImageScrollView
          maxHeight={MAX_HEIGHT}
          minHeight={MIN_HEIGHT}
          maxOverlayOpacity={0}
          minOverlayOpacity={0}
          fadeOutForeground
          disableHeaderGrow={false}
          bounces={true}
          foregroundParallaxRatio={1}
          renderHeader={() => <Image source={require('../../assets/demo1.jpg')} style={styles.image} />}
          renderFixedForeground={() => (
            <Animatable.View
              style={styles.navTitleView}
              ref={navTitleView => {
                this.navTitleView = navTitleView;
              }}
            >
              <Image source={require('../../assets/backIcon.png')} style={{height:15,width:20,marginLeft:10}} />
            <Text style={homeStyles.headerLabel}><Text style={{color:'orange'}}>3</Text>DaysTOGO</Text>
            <View></View>
            </Animatable.View>
          )}
          renderForeground={() => (
            <View style={{ justifyContent: 'space-between',
            alignItems:'center',
            flexDirection:'row',height:MIN_HEIGHT}}>
            <Image source={require('../../assets/backIcon.png')} style={{height:15,width:20,marginLeft:10}} />
            <Text style={homeStyles.headerLabel}><Text style={{color:'orange'}}>3</Text>DaysTOGO</Text>
            <View></View>       
             </View>
          
          )}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          >
              <Text style={styles.name}>{tvShowContent.title}</Text>
          </TriggeringView>
          <View style={styles.section}>
            <Text>Overview</Text>
            <Text>{tvShowContent.overview}</Text>
          </View>
         
        </HeaderImageScrollView>
      </View>
    );
  }
}


export default(ProfileScreen);
const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },

  name: {
    fontWeight: 'bold',
    fontSize:40
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },

  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'space-between',
    alignItems:'center',
    flexDirection:'row',
    opacity: 0,
  },

});
