import React from 'react';
import { Text, FlatList } from 'react-native';


const ListScreen = () => {

    const friends = [
        { name: 'Friend 1', age: '10'},
        { name: 'Friend 2', age: '20'},
        { name: 'Friend 3', age: '25'},
        { name: 'Friend 4', age: '37'},
        { name: 'Friend 5', age: '41'},
        { name: 'Friend 6', age: '21'}
    ];
        return (
            <FlatList
                keyExtractor = {friends => friends.name}
                data = {friends}
                renderItem = {({item}) =>{
                return <Text>{item.name} Age - {item.age}</Text>
                }} 
            />
        );
};

export default ListScreen;