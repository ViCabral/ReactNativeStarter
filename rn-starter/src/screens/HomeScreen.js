import React from "react";
import { Text, StyleSheet } from "react-native";
import { ComponentsScreen } from './ComponentsScreen';

const HomeScreen = () => {
  return <Text style={styles.text}>ComponentsScreen !</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default HomeScreen;
