import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type InputProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
  width?: number;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export const MyInput = ({text, onPress, color, textColor}: InputProps) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, !!color && {backgroundColor: color}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, !!textColor && {color: textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
