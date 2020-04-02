import React , {useState} from "react";
import { StyleSheet, View} from "react-native";
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {

const COLOR_INCREMENT = 20;

  const [Red, setRed] = useState(0);
  const [Green, setGreen] = useState(0);
  const [Blue, setBlue] = useState(0);
  

  const setColor = (color, change) => {

    switch(color){
      case 'Red':
      Red + change > 255 || Red + change < 0 
      ? null
      : setRed(Red + change);
      return;

      case 'Green':
      Green + change > 255 || Green + change < 0 
      ? null
      : setGreen(Green + change);
      return;

      case 'Blue':
      Blue + change > 255 || Blue + change < 0 
      ? null
      : setBlue(Blue + change);
      return;

    default:
      return;
    }
  }

    return(
     <View>
      <ColorCounter 
      onIncrease = {() => setColor('Red', COLOR_INCREMENT )}
      onDecrease = {() => setColor('Red', -1 * COLOR_INCREMENT )}
      color="Red"/>

      <ColorCounter 
      onIncrease = {() => setColor('Green', COLOR_INCREMENT )}
      onDecrease = {() => setColor('Green', -1 * COLOR_INCREMENT )}
      color="Green"/>

      <ColorCounter 
      onIncrease = {() => setColor('Blue', COLOR_INCREMENT )}
      onDecrease = {() => setColor('Blue', -1 * COLOR_INCREMENT )}
      color="Blue"/>

      <View style= {{ 
        alignSelf: 'center',
        marginTop: 30,
        height: 150, 
        width: 150,
        backgroundColor: `rgb(${Red},${Green},${Blue})`}}/>

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