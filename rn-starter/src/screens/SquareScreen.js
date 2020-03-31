import React , {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {

    return(
     <View>
      <ColorCounter color="Red"/>
      <ColorCounter color="Green"/>
      <ColorCounter color="Blue"/>
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

export default SquareScreen;