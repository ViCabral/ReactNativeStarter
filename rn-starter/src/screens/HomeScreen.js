import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

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
      <Button 
      title="Go To CounterScreen" 
      onPress = {() => navigation.navigate('Counter')}
      />
      <Button 
      title="Go To ColorScreen" 
      onPress = {() => navigation.navigate('Color')}
      />
      <Button 
      title="Go To SquareScreen" 
      onPress = {() => navigation.navigate('Square')}
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
