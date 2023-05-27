import React from "react";
import { TextInput, HelperText } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const Email = () => {
  const [text, setText] = React.useState('');

  const onChangeText = text => setText(text);

 const hasErrors = () => {
   return !text.includes('@');};

  return (
    <View>
    <TextInput
      label="Email"
      mode="outlined"
      value={text}
      onChangeText={(text) => setText(text)}
    />
          <HelperText type="error" visible={ hasErrors()}>
        Email address is invalid!
      </HelperText>
      </View>
      
  );
};

export default Email;
