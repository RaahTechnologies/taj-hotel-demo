import {
  Pressable,
  StyleSheet,
  TextInputProps,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React from 'react';

interface CustomButtonProps extends TextInputProps {
  title: string;
  isLoading?: boolean;
}

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function CustomButton(props: CustomButtonProps) {
  const {onPress, title = 'Save', isLoading} = props;
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={'white'} size={30} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    height: 0.05 * screenHeight,
    backgroundColor: '#ad8b3a',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
