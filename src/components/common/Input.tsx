import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {InputTypes} from '../../interface/InputTypes';

const Input = ({
  value,
  onChange,
  placeholder,
  icon,
}: InputTypes): React.JSX.Element => {
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      paddingTop: 9,
      paddingBottom: 9,
      paddingLeft: icon ? 40 : 16,
      paddingRight: 16,
      borderRadius: 8,
      fontSize: 16,
      fontFamily: 'Inter',
      color: '#000000',
      backgroundColor: '#FFFFFF',
    },

    icon: {
      position: 'relative',
      top: 34,
      left: 15,
      zIndex: 1,
    },
  });

  return (
    <View>
      {icon && (
        <View style={styles.icon}>
          <Image source={icon} />
        </View>
      )}
      <TextInput
        style={styles.input}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
