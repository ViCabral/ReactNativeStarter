import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { ComponentsScreen } from './ComponentsScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View> 
      <Text style={styles.text}>Here are HomeScreen!</Text>
      <Button 
      title="Go To ComponentsScreen" 
      onPress = {() => navigation.navigate('Components')}
      />
      <Button 
      title="Go To ListScreen" 
      onPress = {() => navigation.navigate('List')}
      />
      <Button 
      title="Go To ImageScreen" 
      onPress = {() => navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 20
  }
});

export default HomeScreen;
