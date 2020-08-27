import React from 'react';
import { View,Text,SafeAreaView,TouchableOpacity} from 'react-native';
import {commonStyles,eventScreenStyles} from './styles';
import ViewEvents from './ViewEvents';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import { Icon } from 'react-native-elements';
import CityPicker from '../../../app/components/modals/CityPicker';

class EventScreen extends React.Component {
    state={
        index: 0,
        routes: [{ key: 'active', title: 'Active events'},
        { key: 'past', title: 'Past events'},
    ],
    }

  render() {
    return (
      <SafeAreaView style={commonStyles.safeView}>
        <View style={eventScreenStyles.headerView}>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={this.handleModal}>
          <Text style={eventScreenStyles.headerLabel}>Events </Text>  
          
        </TouchableOpacity>
        </View>
        <View style={eventScreenStyles.container}>
        <TabView
        tabBarPosition="bottom"
            navigationState={this.state}
            renderScene={SceneMap({
              active:  ({route:{key}}) => <ViewEvents title={key}   />,
              past:({route:{key}}) => <ViewEvents title={key}    />,
            })}
            onIndexChange={index => this.setState({index})}
            renderTabBar={props => (
              <TabBar
              bounces={true}
              scrollEnabled={true}
              ovescroll={true}
              contentContainerStyle={eventScreenStyles.innerContainer}
              onTabLongPress={({route:{key}})=>props.jumpTo(key)}
                {...props}     
                tabStyle={eventScreenStyles.tabBar} 
                indicatorStyle={{backgroundColor: '#ffffff'}}
                inactiveColor={'#000000'}
                activeColor={'#000000'}
                style={eventScreenStyles.tabStyle}
                renderLabel={({route, focused, color}) => (
                  <View >
                    <Text style={focused?[eventScreenStyles.activeTabLabel,eventScreenStyles.tabLabel]:
                  [eventScreenStyles.tabLabel,eventScreenStyles.InActiveTabLabel]}>
                      {route.title}
                    </Text>
                  </View>
                )}
              />
            )}
          />
        </View>

      </SafeAreaView>

    );
  }
}

export default(EventScreen);
