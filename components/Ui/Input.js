import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({label , keyboardType,secure, onUpdateValue}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput 
      style={styles.input} 
      autoCapitalize='none'
      keyboardType={keyboardType}
      secureTextEntry={secure}
      onChangeText={onUpdateValue}
      value={value}
      />
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
    backgroundColor:Color.primary100,
    borderRadius:
  },
});
