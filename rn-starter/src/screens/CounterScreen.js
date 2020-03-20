import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={styles.text}>CounterScreen</Text>
            <Button
            title="Increase"
            onPress = {() => {
                setCounter(counter + 1);
            }}
            />
            <Button
            title="Decrease"
            onPress = {() => {
                setCounter(counter - 1);
            }}
            />
                <Text style={styles.text}>Current Counter: {counter}</Text>

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

export default CounterScreen;