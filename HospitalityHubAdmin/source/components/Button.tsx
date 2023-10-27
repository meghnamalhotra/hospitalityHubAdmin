import React from 'react';
import {
  ButtonProps,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../theme/colors';

const Button: React.FC<ButtonProps> = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontSize: 22,
    paddingBottom: 8,
  },
  button: {
    backgroundColor: Colors.buttonBlue,
    width: '80%',
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.06
        : Dimensions.get('screen').height * 0.07,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: '2%',
    justifyContent: 'center',
  },
});

export default Button;
