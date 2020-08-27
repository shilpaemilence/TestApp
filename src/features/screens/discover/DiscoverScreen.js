import React from 'react';
import {SafeAreaView,Dimensions,View,Text} from 'react-native';
import {commonStyles,homeStyles} from './styles';
import EventsView from './EventsView';
import Carousel from 'react-native-snap-carousel';
import {generateVibration} from '../../../app/constants/helper';

const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

class DiscoverScreen extends React.Component {
state={
  entries:[{
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../../assets/demo1.jpg'),
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../../assets/demo.jpg'),
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: require('../../assets/demo2.jpg'),
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: require('../../assets/demo1.jpg'),
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../../assets/demo1.jpg'),
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../../assets/demo.jpg'),
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: require('../../assets/demo2.jpg'),
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: require('../../assets/demo1.jpg'),
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: require('../../assets/demo2.jpg'),
  },
]
}

render () {
  return (
    <SafeAreaView style={commonStyles.safeView}>
      <Carousel
          onSnapToItem={generateVibration('impactLight')}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          layout="default"
          itemHeight={screenHeight - 60}
          itemWidth={screenHeight - 60}
          data={this.state.entries}
          renderItem={({item, index}, parallaxProps)=>(
            <EventsView item={item} parallaxProps={parallaxProps}/>
          )}
          hasParallaxImages={true}
          vertical={true}
          containerCustomStyle={{backgroundColor:'#000'}}
          inactiveSlideOpacity={0.2}
      />
   </SafeAreaView>
  );
}
}
export default(DiscoverScreen);
