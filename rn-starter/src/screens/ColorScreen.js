import React , {useState} from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = props => {

  const [colors, setColors] = useState([]);

    return(
      <View>
      <Button 
      title="Add Color" 
      onPress = {() => setColors([...colors, randomRgb()])}
      />
      <FlatList 
      keyExtractor = {item => item}
      data = {colors}
      renderItem = {({ item }) => {
        return (   
          <View 
          style={{alignSelf: 'center',
          marginTop: 10,
          height: 100, 
          width: 100, 
          backgroundColor: randomRgb() }}/>
        )
      }}
      />
        
      </View>
    );
};

const randomRgb = () => {

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
  text: {
      fontSize: 15,
      textAlign: "center",
      padding: 10
    },

});

export default ColorScreen;