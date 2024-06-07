import React from 'react';
import { TextInput, View } from 'react-native';

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    PaddingVertical: 8,
    paddingHorizontal: 6,
  },
});
