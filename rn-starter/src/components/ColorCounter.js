import React , {useState} from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return(
     <View>
         <Text style={styles.text}>{color}</Text>
         <Button 
         onPress={() => onIncrease()}
         title={`Increase ${color}`}/>

         <Button 
         onPress={() => onDecrease()}
         title={`Decrease ${color}`}/>
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