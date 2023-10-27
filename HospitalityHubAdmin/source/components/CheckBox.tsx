import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Checkbox = () => {
  const colorScheme = useColorScheme();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const checkboxColor = colorScheme === 'dark' ? 'black' : 'black';
  const borderColor = colorScheme === 'dark' ? 'black' : 'black';

  return (
    <CheckBox
      boxType="square"
      tintColors={{ true: checkboxColor, false: checkboxColor }} 
      onTintColor={borderColor} //for ios
      onFillColor={borderColor} 
      disabled={false}
      value={toggleCheckBox}
      onValueChange={(newValue) => setToggleCheckBox(newValue)}
    />
  );
};

export default Checkbox;
