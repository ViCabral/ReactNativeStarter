import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const name = 'Vinicius';

const ComponentsScreen = () => {

    return (
        <View>
        <Text style={styles.textStyle}>Welcome!</Text>
        <Text style={styles.SubHeader}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    SubHeader: {
        fontSize: 20,
    }

});

export default ComponentsScreen;