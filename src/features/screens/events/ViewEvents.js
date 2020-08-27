import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {eventStyles,eventScreenStyles} from './styles';
import { Icon } from 'react-native-elements'

class ViewEvents extends React.Component {
    state = {
        data: [
          {name: 'Head Masters', price: '$70'},
          {name: 'Head Masters', price: '$70'},
          {name: 'Head Masters', price: '$70'},
          {name: 'Head Masters', price: '$70'},
        ],
    };

  render() {
    return (
    <View style={eventStyles.flatView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.state.data}
          style={eventScreenStyles.eventView}
          keyExtractor={index => index.toString()}
          renderItem={({item}) => (
              <TouchableOpacity style={eventStyles.cardView}>
     
                <Image source={require('../../assets/demo1.jpg')} style={eventStyles.topImage}/>
                <Text style={eventStyles.eventTitle}>Day Breaker Live // Episode:5 - Disco House Party</Text>
                <Text style={eventStyles.date}>Sat, Aug 25, 11:00 A.M.</Text>
                <View style={eventStyles.rowView}>
                    <Text style={eventStyles.organiserName}>@Organiser</Text>
                    <Text style={eventStyles.date}>Discount value</Text>
                </View>
                <View style={eventStyles.rowView}>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                      <Icon
                        name='heart-o'
                        type='font-awesome'
                        color='#f50'
                        size={18}
                        style={{paddingRight:5}}
                      />
                      <Text style={eventStyles.date}>Category</Text>
                    </View>
                    <Text style={eventStyles.date}>Ticket Price</Text>
                </View>
              </TouchableOpacity>
          )}
        />
    </View>

    );
  }
}

export default(ViewEvents);
