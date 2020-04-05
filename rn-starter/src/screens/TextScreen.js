import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput} from "react-native";

const TextScreen = () => {

    const [Name, setName] = useState ('');

    return(
     <View>
         <Text style = {styles.text}>Put Some Text</Text>
         <TextInput 
         autoCapitalize = "none"
         autoCorrect = { false }
         style = {styles.input}
         placeholder = "Lets do It"
         placeholderTextColor = "#C6C8CB"
         value = { Name }
         onChangeText = {newValue => setName(newValue)}
         
         />

        <Text style = {styles.text}>You Put {Name}</Text>
        {
             Name.length > 5 
             ? <Text style = {styles.text}>Valid Password</Text>
             : <Text style = {styles.text}>Password Must to be bigger than 5 caracters</Text>
        }
     </View>
    );
};

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      textAlign: "center",
      padding: 10
    },
    input: {
      margin: 15,
      height: 40,
      padding: 10,
      borderColor: 'black',
      borderWidth: 1
    }

});

export default TextScreen;