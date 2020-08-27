import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {tiktokView} from './styles';
import { Icon } from 'react-native-elements'
import {ParallaxImage } from 'react-native-snap-carousel';
import {IC_BUY,IC_DOTTED,IC_CHAT,IC_CALENDAR} from '../../../app/constants/constants';

class EventsView extends React.Component {
    state = {
        data: [
          {name: 'Head Masters', price: '$70'},
          {name: 'Head Masters', price: '$70'},
          {name: 'Head Masters', price: '$70'},
          {name: 'Head Masters', price: '$70'},
        ],
      };
  render() {
    const{item,parallaxProps}=this.props;
    return (
      <View style={tiktokView.item}>
      <ParallaxImage
          source={item.illustration}
          containerStyle={tiktokView.imageContainer}
          style={tiktokView.image}
          parallaxFactor={0.5}
          showSpinner={true}
          fadeDuration={500}
          {...parallaxProps}      
      />
      <View style={{position:'absolute',padding:'5%'}}>
      <View style={tiktokView.cardView}>
          <Image source={require('../../assets/demo.jpg')} style={tiktokView.pro}/>
          <View style={tiktokView.topViewName}>
          <Text style={tiktokView.eventTitle} numberOfLines={1}>MarshMellow</Text>
          <Text style={tiktokView.date}>Mcm Grand Los Vegas</Text>
          </View>
      </View>
      <Text style={[tiktokView.eventTitle,tiktokView.heading]}>MarshMello/Bastielle</Text>
      <Text style={tiktokView.eventTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</Text>
      </View>
      <View style={{position:'absolute',bottom:'6%',paddingVertical:'5%',width:'100%',
      flexDirection:'row',justifyContent:'space-between'}}>
      <View style={tiktokView.leftView}>
        <View style={{flexDirection:'row'}}>
          <Icon name='calendar' type='font-awesome'color='#fff' size={15} style={{paddingRight:5}} />
          <Text style={tiktokView.time}>Today at 10pm</Text>
        </View>
        <Text style={tiktokView.time}><Text style={{fontSize:18}}># </Text> Secret Glg</Text>
        <View style={{marginTop:15}}>
        <View style={tiktokView.offView}>
          <Text style={tiktokView.off}>30% off</Text>
        </View>
        <Text style={tiktokView.price}>$40</Text>
        </View>
      </View>
      <View style={tiktokView.rightView}>
        <View style={tiktokView.badgeView}>
          <Text style={tiktokView.badge}>10</Text>
        </View>
        <TouchableOpacity>
        <Image source={IC_CHAT} style={tiktokView.rightIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={IC_DOTTED} style={tiktokView.rightIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={IC_BUY} style={tiktokView.rightIcon}/>
        </TouchableOpacity>
      </View>
      </View>
  </View>
    );
  }
}

export default(EventsView);
