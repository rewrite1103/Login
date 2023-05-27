import React from "react";
import { TextInput } from "react-native-paper";

const Password = () => {
    const [text, setText] = React.useState('');

    const onChangeText = text => setText(text);
 
   const hasErrors = () => {
     return !text.includes('@');
   };

  return (
    <TextInput
      label="Password"
      mode="outlined"
      value={text}
      onChangeText={(text) => setText(text)}
    />
    
  );
};

export default Password;