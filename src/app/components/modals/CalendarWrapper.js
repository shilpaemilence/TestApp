import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {IC_FORWARD,IC_BACK} from '../../constants/constants';
import moment from 'moment';

class CalendarWrapper extends Component {
  state = {
    dateSelected: '',
  };
  
  render() {
    return (
      <View>
        <Calendar
          current={new Date()}
          minDate={moment(new Date()).format('yyyy-MM-D')}
          onDayPress={day => {
            this.setState({
              dateSelected: {
                [day.dateString]: {selected: true, selectedColor: '#232d3b'},
              },
            });
          }}
          monthFormat={'MMM, yyyy'}
          hideArrows={false}
          renderArrow={direction => {
            if (direction === 'left') {
              return (
                <Image
                  source={IC_BACK}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
              );
            } else {
              return (
                <Image
                  source={IC_FORWARD}
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                />
              );
            }
          }}
          hideExtraDays={true}
          disableMonthChange={false}
          firstDay={1}
          hideDayNames={false}
          showWeekNumbers={false}
          onPressArrowLeft={substractMonth => substractMonth()}
          onPressArrowRight={addMonth => addMonth()}
          disableArrowLeft={false}
          disableArrowRight={false}
          markedDates={this.state.dateSelected}
          theme={{
            selectedDayTextColor: '#fff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            monthTextColor: '#232d3b',
            indicatorColor: 'blue',
            textDayFontFamily: 'Muli-SemiBold',
            textMonthFontFamily: 'Muli-SemiBold',
            textDayHeaderFontFamily: 'monospace',
          }}
        />
      </View>
    );
  }
}

export default CalendarWrapper;
