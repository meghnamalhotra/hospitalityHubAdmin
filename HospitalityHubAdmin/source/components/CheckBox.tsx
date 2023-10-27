import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Colors } from '../theme/colors';

const Checkbox = () => {
  const colorScheme = useColorScheme();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const checkboxColor = colorScheme === 'dark' ? Colors.black : Colors.black;
  const borderColor = colorScheme === 'dark' ? Colors.black : Colors.black;

  return (
    <CheckBox
      boxType="square"
      tintColors={{ true: checkboxColor, false: checkboxColor }} 
      onTintColor={borderColor} 
      onFillColor={borderColor} 
      disabled={false}
      value={toggleCheckBox}
      onValueChange={(newValue) => setToggleCheckBox(newValue)}
    />
  );
};

export default Checkbox;
