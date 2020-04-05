import React , {useReducer} from "react";
import { StyleSheet, View} from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {


    switch(action.colorToChange){
        case 'Red':
            return {...state, Red: state.Red + action.amount};
        case 'Green':
            return {...state, Green: state.Green + action.amount};
        case 'Blue':
            return {...state, Blue: state.Blue + action.amount};
        default:
            return state;

    }
};

const SquareRedux = () => {

    
    const [state, dispatch] = useReducer (reducer, {Red: 0, Green: 0, Blue: 0});
    const {Red, Green, Blue} = state;

    return(
     <View>
      <ColorCounter 
      onIncrease = {() => dispatch({colorToChange: 'Red', amount: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({colorToChange: 'Red', amount: -1 * COLOR_INCREMENT})}
      color="Red"/>

      <ColorCounter 
      onIncrease = {() => dispatch({colorToChange: 'Green', amount: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({colorToChange: 'Green', amount: -1 * COLOR_INCREMENT})}
      color="Green"/>

      <ColorCounter 
      onIncrease = {() => dispatch({colorToChange: 'Blue', amount: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({colorToChange: 'Blue', amount: -1 * COLOR_INCREMENT})}
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

export default SquareRedux;