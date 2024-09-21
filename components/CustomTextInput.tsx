import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React from 'react';
import {FieldError} from 'react-hook-form';

interface CustomTextInputProps extends TextInputProps {
  error: FieldError | undefined;
}

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function CustomTextInput(props: CustomTextInputProps) {
  const {placeholder, onChangeText, onBlur, value, secureTextEntry, error} =
    props;
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    height: 0.05 * screenHeight,
    borderColor: '#000000',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    // marginBottom: 36,
    // borderRadius: 6,
  },
  errorText: {
    color: '#ef443a',
  },
});
