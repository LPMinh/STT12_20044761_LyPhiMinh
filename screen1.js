import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Screen1() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://653f4a689e8bd3be29e02cbc.mockapi.io/shop")
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return ( < View style = { styles.container } >
        <
        FlatList data = { data }
        renderItem = {
            ({ item }) => ( <
                TouchableOpacity style = {
                    { width: '90%', height: 'auto', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }
                } >
                <
                Image style = {
                    { width: '100%', height: 90 }
                }
                source = {
                    { uri: item.image }
                }
                /> <
                View style = {
                    s { flexDirection: 'row', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }
                } >

                <
                View style = {
                    { width: '50%' }
                } >
                <
                Text > { item.status } < /Text> < /
                View > <
                View style = {
                    { width: '50%' }
                } >
                <
                Text > { item.time } < /Text> < /
                View > <
                /View> <
                Text style = {
                    { width: '100%', fontWeight: 'bold', height: '50' }
                } > { item.name } < /Text> < /
                TouchableOpacity >

            )
        }
        style = {
            { width: '100%' }
        }
        /> < /
        View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});