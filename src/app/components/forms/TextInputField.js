import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

//For custom onchange and onBlur events change the functional component to class based and write seprate methods for both

class TextInputField extends Component {
  state = {
    value: '',
  };
  componentDidMount() {
    const {input} = this.props;
    if (input && input.value) {
      this.setState({value: String(this.props.input.value)});
    }
  }
  componentDidUpdate(previousProps) {
    if (previousProps.input.value !== this.props.input.value) {
      this.setState({value: this.props.input.value});
    }
  }
  handleChange = value => {
    const {
      input: {onChange, name},
    } = this.props;
    this.setState({value}, () => {
      onChange(value);
    });
  };
  handleBlur = () => {
    const {
      input: {onBlur, name},
      handleOnBlur,
    } = this.props;
    const {value} = this.state;
    onBlur(value);
    if (handleOnBlur) {
      handleOnBlur(value, name);
    }
  };
  handleIconPress = () => {
    const {iconFunc} = this.props;
    if (iconFunc) {
      iconFunc();
    }
  };
  render() {
    const {
      placeholder,
      viewStyles,
      inputStyles,
      inFieldText,
      textStyles,
      placeholderTextColor,
      icon,
      src,

      input: {onChange, onBlur},
      meta: {touched, error},
      ...restProps
    } = this.props;
    return (
      <View style={viewStyles}>
        <View>
          <TextInput
            placeholder={placeholder}
            style={inputStyles}
            placeholderTextColor={placeholderTextColor}
            //onBlur={onBlur}
            value={this.state.value}
            onChangeText={this.handleChange}
            onBlur={this.handleBlur}
            {...restProps}
          />
          {icon && icon === true && (
            <TouchableOpacity
              onPress={this.handleIconPress}
              style={styles.iconView}>
              <Image source={src} style={styles.icon} resizeMode="contain" />
            </TouchableOpacity>
          )}
        </View>
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
}

export default TextInputField;

const styles = StyleSheet.create({
  errorText: {
    fontFamily: 'Montserrat-Regular',
    color: '#e10202',
    fontSize: 12,
    marginLeft: '3%',
    marginTop: '1%',
  },
  actionText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    position: 'absolute',
    right: 0,
    bottom: 16,
    zIndex: 2,
  },
  iconView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    paddingHorizontal: 2,
    backgroundColor: 'white',
    paddingVertical: 5,
  },
  icon: {
    width: 23,
    height: 13,
  },
});
