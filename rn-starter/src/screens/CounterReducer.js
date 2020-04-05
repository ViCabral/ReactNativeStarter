import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const INCREMENT = 1;

const reducer = (state, action) => {

    switch(action.type){
        case 'Increase':
            return {...state, counter: state.counter + action.payload};

        case 'Decrease':
            return {...state, counter: state.counter + action.payload};
       
        default:
            return state;
    }
};

const CounterReducer = () => {

    const [state, dispatch] = useReducer (reducer, {counter: 0});

    return (
        <View>
            <Text style={styles.text}>CounterScreen</Text>
            <Button
            title="Increase"
            onPress = {() => dispatch({type: 'Increase', payload:INCREMENT})}
            />
            
            <Button
            title="Decrease"
            onPress = {() => dispatch({type: 'Increase', payload:-1 * INCREMENT})}
            />
                <Text style={styles.text}>Current Counter: {state.counter}</Text>

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

export default CounterReducer;