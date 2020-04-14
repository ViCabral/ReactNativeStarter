import React from "react";
import { Text, StyleSheet, View} from "react-native";

const BoxScreen = () => {

    
    return(
     <View style={{flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'yellow',
        height: 210}}>

       <View 
       style={{
       height: 100, 
       width: 100,
       backgroundColor: 'blue'}}
       />
       <View 
       style={{alignSelf: 'flex-end',
       height: 100, 
       width: 100,
       backgroundColor: 'black'}}
       />
       <View 
       style={{
       height: 100, 
       width: 100,
       backgroundColor: 'green'}}
       />

     </View>
    );
};

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      textAlign: "center",
      padding: 10
    }
});

export default BoxScreen;