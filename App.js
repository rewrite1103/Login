import React from "react";
import { MD3LightTheme as DefaultTheme,PaperProvider, Text, Button } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Email from "./components/inputEmail";
import Password from "./components/inputPassword";
import { StyleSheet, View, Image} from "react-native";



const SuperTema = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6D64FF',
    secondary: 'yellow',
    text: "#992f4d",
  },
};

export default function App() {
  return (
 
    <SafeAreaProvider style={styles.containermain}>
    
      <PaperProvider theme={SuperTema}>
      

        <View style={styles.container}>
        <Text variant="displayMedium">Welcome</Text>
        <Text style={styles.textColor} variant="titleLarge">Sign in to your account</Text>
        <View style={styles.contInput}>
        <Email />
        <Password />
        </View>
        <View style={styles.cont1}> 
      
          <Text style={styles.textColor} variant="bodyLarge">Forgot your Password?</Text>
        
        </View>

        <View style={styles.contButton}>
  
        <Button
          icon="account-circle"
          mode="contained"
          onPress={() => alert("Esta iniciando sesion")}
        >
          SING IN
        </Button>
                
        </View>

        <View style={styles.cont}>
          <Text style={styles.textColor} variant="bodyLarge">Don't have an account? </Text>

        
            <Text style={styles.texStyl} variant="bodyLarge">Sign up</Text>
          
        </View>
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containermain:{
    backgroundColor: "#f1f1f1",
  },
  container:{
    marginTop: 250,
    marginLeft: 20,
    marginRight: 20,  
  },
  cont: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cont1: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  contInput:{
    marginTop: 30,
    marginBottom: 20,

  },

  contButton:{
       marginBottom: 30,
       marginTop: 30,
  },

  texStyl:{
  fontWeight: "bold",
  },
  textColor:{
    color: "#191919",
    
  }
});
