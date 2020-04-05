import React , {useReducer} from "react";
import { StyleSheet, View} from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {


    switch(action.type){
        case 'Red':
            return state.Red + action.payload > 255 || state.Red + action.payload < 0 
            ? state
            : {...state, Red: state.Red + action.payload};
            
        case 'Green':
            return state.Green + action.payload > 255 || state.Green + action.payload < 0 
            ? state
            : {...state, Green: state.Green + action.payload};

        case 'Blue':
            return state.Blue + action.payload > 255 || state.Blue + action.payload < 0 
            ? state
            : {...state, Blue: state.Blue + action.payload};

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
      onIncrease = {() => dispatch({type: 'Red', payload: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({type: 'Red', payload: -1 * COLOR_INCREMENT})}
      color="Red"/>

      <ColorCounter 
      onIncrease = {() => dispatch({type: 'Green', payload: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({type: 'Green', payload: -1 * COLOR_INCREMENT})}
      color="Green"/>

      <ColorCounter 
      onIncrease = {() => dispatch({type: 'Blue', payload: COLOR_INCREMENT})}
      onDecrease = {() => dispatch({type: 'Blue', payload: -1 * COLOR_INCREMENT})}
      color="Blue"/>

      <View style= {{ 
        alignSelf: 'center',
        marginTop: 30,
        height: 150, 
        width: 150,
        backgroundColor: `rgb(${state.Red},${state.Green},${state.Blue})`}}/>

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