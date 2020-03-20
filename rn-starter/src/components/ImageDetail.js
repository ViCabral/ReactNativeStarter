import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";


const ImageDetail = props => {
    return(
      <View>
        <Image style={styles.imag} source={props.imageSource}/>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      textAlign: "center",
      padding: 10
    },
  imag: {
    marginLeft: "auto",
    marginRight: "auto",
  }

});

export default ImageDetail;
  