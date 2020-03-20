import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const ColorScreen = props => {
    return(
      <View>
      <Button 
      title="Add Color" 
      //onPress = {() => navigation.navigate('Image')}
      />
      
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

export default ColorScreen;