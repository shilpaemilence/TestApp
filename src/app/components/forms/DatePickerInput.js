import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
class DatePickerInput extends Component {
  state = {
    isVisible: false,
    selectedFieldValue: null,
  };
  componentDidMount() {
    const {input} = this.props;
    if (input && input.value) {
      this.setState({selectedFieldValue: this.props.input.value});
    }
  }
  componentDidUpdate(previousProps) {
    if (previousProps.input.value !== this.props.input.value) {
      this.setState({selectedFieldValue: this.props.input.value});
    }
  }
  handleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  handleDatePicked = date => {
    let momentDate = moment(date).format('YYYY-MM-DD');
    let unixDate = moment(date).valueOf();
    console.log('A date has been picked: ', date, momentDate, unixDate);
    this.setState({selectedFieldValue: momentDate});
    this.handleVisibility();
    const {
      onChangeValue,
      type,
      input: {onChange},
    } = this.props;
    if (type && type === 'unix') {
      onChange(unixDate);
      onChangeValue && onChangeValue(unixDate);
    } else {
      onChange(momentDate);
      onChangeValue && onChangeValue(momentDate);
    }
  };
  render() {
    const {
      placeholder,
      maximumDate,
      minimumDate,
      viewStyles,
      type,
      meta: {touched, error},
    } = this.props;
    const {isVisible, selectedFieldValue} = this.state;
    return (
      <View
        style={[{marginBottom: Platform.OS === 'ios' ? '8%' : 15}, viewStyles]}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.touchView}
          onPress={this.handleVisibility}>
          <Text
            style={{
              color: '#050505',
              fontFamily: 'Montserrat-Regular',
              fontSize: 13,
            }}>
            {selectedFieldValue
              ? type !== undefined && type === 'unix'
                ? moment(new Date(Number(selectedFieldValue))).format(
                    'YYYY-MM-DD',
                  )
                : selectedFieldValue
              : placeholder}
          </Text>
          <DateTimePicker
            timePickerModeAndroid="spinner"
            isVisible={isVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.handleVisibility}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
          />
        </TouchableOpacity>
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
}

export default DatePickerInput;
const styles = StyleSheet.create({
  errorText: {
    fontFamily: 'Montserrat-Regular',
    color: '#e10202',
    fontSize: 12,
    marginLeft: '3%',
    marginTop: '1%',
  },
  touchView: {
    borderRadius: 20,
    height: 45,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#ececec',
    justifyContent: 'center',
  },
});
