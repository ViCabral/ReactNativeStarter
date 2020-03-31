import React , {useState} from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const ColorCounter = ({ color }) => {

    return(
     <View>
         <Text>{color}</Text>
         <Button title={`Increase ${color}`}/>
         <Button title={`Decrease ${color}`}/>
     </View>
    );
};

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      textAlign: "center",
      padding: 10
    },

});

export default ColorCounter;