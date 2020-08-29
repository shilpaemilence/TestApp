import React from 'react';
import { View,Text,SafeAreaView} from 'react-native';
import {commonStyles,homeStyles} from './styles';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
import DiscoverScreen from './DiscoverScreen';
import {executeVibrate} from '../../../app/constants/helper';

class DiscoverTabScreen extends React.Component {
    state={
        index: 0,
        routes: [
        { key: 'today', title: 'Today' },
        { key: 'tomorrow', title: 'Tomorrow' },
        { key: 'after', title: 'Day After' },
    ],
    }

  render() {
    return (
      <SafeAreaView style={commonStyles.safeView}>
         <View style={homeStyles.headerView}>
      <Text style={homeStyles.headerLabel}><Text style={{color:'orange'}}>3</Text>DaysTOGO</Text>
    </View>
        <View style={homeStyles.container}>
        <TabView
            tabBarPosition="bottom"
            navigationState={this.state}
            renderScene={SceneMap({
              today:({route:{key}}) => <DiscoverScreen title={key}/>,
              tomorrow: ({route:{key}}) => <DiscoverScreen title={key}/>,
              after: ({route:{key}}) => <DiscoverScreen title={key}/>,
            })}
            onIndexChange={index => {
              executeVibrate();
              this.setState({index});  
           }}
            renderTabBar={props => (
              <TabBar
                bounces={true}
                scrollEnabled={true}
                ovescroll={true}
                contentContainerStyle={homeStyles.innerContainer}
                onTabLongPress={({route:{key}})=>{
                  props.jumpTo(key);
                }}
                {...props}     
                indicatorStyle={{backgroundColor: '#ffffff'}}
                inactiveColor={'#000000'}
                activeColor={'#000000'}
                style={homeStyles.tabStyle}
                renderLabel={({route, focused, color}) => (
                  <View >
                    <Text style={focused?[homeStyles.activeTabLabel,homeStyles.tabLabel]:
                      [homeStyles.tabLabel,homeStyles.InActiveTabLabel]}>
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

export default(DiscoverTabScreen);